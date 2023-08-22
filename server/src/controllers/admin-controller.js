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
<<<<<<< HEAD
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
    console.log(newAdmin);
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
  try {
    const user = await Admin.findOne({
      userName: req.body.userName,
    });
=======
    try {
        const userNameExists = await Admin.findOne({ userName: req.body.userName });
        if(userNameExists !== null) {
            return res.status(409).json({message: "User Already Exists", status: false})
        }
        const salt = await bcrypt.genSalt(10);
        const password = req.body.password
        const hashedPassword = await bcrypt.hash(password, salt)
        const newAdmin = await new Admin({
            name: req.body.name,
            email: req.body.email,
            userName: req.body.userName,
            password: hashedPassword,
            createdAt: Date.now()
        })
        console.log(newAdmin)
        await newAdmin.save()
        res.status(200).json({message: "Successfully Signed In", status: true})
    } catch(err) {
        console.log(err)
        res.status(500).json({message: "Unsuccessfull in creating admin. Please Try Again...", err: err})
    }
}

const loginAdmin = async(req, res) => {
    if(!req.body.userName || !req.body.password){
        return res.status(400).json({message: "Something is missing.", status: false})
    }
    try {
        const user = await Admin.findOne({
            userName: req.body.userName,
        })
>>>>>>> fa1cb7137e21921c89f47c02247457e7b64ff28d

    const passwordChecker = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (user && passwordChecker) {
      const token = jwt.sign(
        {
          user: user.user,
          _id: user._id,
        },
        "secret_is_a_secret",
        {
          expiresIn: "1d",
        }
      );
      res
        .set("Authorization", `Bearer ${token}`)
        .status(200)
        .json({ token, message: "Logged in Successfully" });
    } else {
      res
        .status(404)
        .json({
          message: "Wrong username or password. Please try again.",
          status: false,
        });
    }
<<<<<<< HEAD
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Login Unsuccessfull. Please Try Again...", err: err });
  }
};
=======
}

>>>>>>> fa1cb7137e21921c89f47c02247457e7b64ff28d

exports.loginAdmin = loginAdmin;
exports.signUpAdmin = signUpAdmin;
