const Admin = require("../model/adminModal");

const getAdminInfo = async (req, res) => {
  try {
    const data = await Admin.findById(req.user._id).select(
      "name userName email createdAt"
    );
    return res.status(200).json(data);
  } catch (err) {
    return res
      .status(404)
      .json({ message: "No admin Info found.", status: false });
  }
};

const getUserinfo = async (req, res) => {
  try {
    const data = await Admin.findById(req.user._id);
    res
      .status(200)
      .json({
        message: "User data successfully found.",
        status: true,
        user: data,
      });
  } catch (err) {
    res.status(500).json({ message: "Failed to get user data", status: false });
  }
};

exports.getUserinfo = getUserinfo;
exports.getAdminInfo = getAdminInfo;
