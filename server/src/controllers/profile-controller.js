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

exports.getAdminInfo = getAdminInfo;
