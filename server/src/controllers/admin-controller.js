const Admin = require("../model/adminModal");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signUpAdmin = async (req, res) => {
  console.log("body", req.body);
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.userName ||
    !req.body.password
  ) {
    return res
      .status(400)
      .json({ message: "Something is missing.", status: false });
  }
  try {
    const userNameExists = await Admin.findOne({ userName: req.body.userName });
    if (userNameExists !== null) {
      return res
        .status(500)
        .json({ message: "User Already Exists", status: false });
    }
    const salt = await bcrypt.genSalt(10);
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, salt);
    const newAdmin = await new Admin({
      name: req.body.name,
      email: req.body.email,
      userName: req.body.userName,
      password: hashedPassword,
      createdAt: Date.now(),
    });
    await newAdmin.save();
    res.status(200).json({ message: "Successfully Signed In", status: true });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({
        message: "Unsuccessfull in creating admin. Please Try Again...",
        err: err,
      });
  }
};


const loginAdmin = async (req, res) => {
  if (!req.body.userName || !req.body.password) {
    return res.status(400).json({ message: "Something is missing.", status: false })
  }
  try {
    const user = await Admin.findOne({
      userName: req.body.userName,
    })
    if(!user){
      return res.status(404).json({message: "Username or password Incorrect..", status: false});
    }
    const passwordChecker = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if(!passwordChecker){
      return res.status(404).json({message: "Username or Password Incorrect..", status: false});
    }
    if (user && passwordChecker) {
      const token = jwt.sign(
        {
          user: user.user,
          _id: user._id,
        },
        "secret_is_a_secret",
        {
          expiresIn: "1w",
        }
      );
      res
        .set("Authorization", `Bearer ${token}`)
        .status(200)
        .json({ token, message: "Logged in Successfully", status: true });
    } 
  } catch (err) {
    res.status(500).json({ message: "Something went wrong. Please try again." , status: false});
  }
};

exports.loginAdmin = loginAdmin;
exports.signUpAdmin = signUpAdmin;