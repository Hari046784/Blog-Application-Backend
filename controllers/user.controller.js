const User = require("../models/user.model");
const bcrypt = require("bcrypt");

// To get all users
exports.getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    return console.log("Error:", error);
  }
  if (!users) {
    return res.status(404).send({
      message: "No Users Found",
    });
  }
  return res.status(200).send({ users });
};

exports.signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    return console.log("Error:", error);
  }
  if (existingUser) {
    return res.status(400).send({
      message: "User Already Exists! Login Instead",
    });
  }
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new User({ name, email, password: hashedPassword, blog: [] });
  try {
    await user.save();
  } catch (error) {
    return console.log("Error:", error);
  }
  return res.status(201).send({ user });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    return console.log("Error:", error);
  }
  if (!existingUser) {
    return res.status(404).send({
        message: "Couldn't Find User By This Email" 
    });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).send({ 
        message: "Incorrect Password"
    });
  }
  return res.status(200).send({
      message: "Login Successfully", user: existingUser 
    });
};