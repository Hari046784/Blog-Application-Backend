const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    required: "Email is mandatory",
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  blogs: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Blog",
      required: true,
    }
  ],
},
{ timestamps: true }
);
  
module.exports = mongoose.model("User", userSchema);