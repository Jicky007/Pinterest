const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/sirius");
mongoose.connect(
  "mongodb+srv://Jug_on_it:TonyStark%4012@mark-1.jiwlrmj.mongodb.net"
);

const userSchema = new mongoose.Schema(
  {
    username: String,
    name: String,
    email: String,
    password: String,
    profileImage: String,
    contact: Number,
    boards: {
      type: Array,
      default: [],
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
      },
    ],
  },
  { timestamps: true }
);
userSchema.plugin(plm);

module.exports = mongoose.model("User", userSchema);
