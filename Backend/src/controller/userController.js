const User = require("../model/userModel");
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');


exports.createUser = async (req, res) => {
  try {
      const { password, email, username } = req.body;
      const saltround = 10;

      // Check if email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          console.log("Email ID duplicate");
          return res.status(409).json({ msg: "Email already in use" }); // 409 Conflict
      }

      // Hash the password
      bcrypt.hash(password, saltround, async (err, hash) => {
          if (err) {
              console.error("Error hashing password", err);
              return res.status(500).json({ msg: "Internal Server Error" });
          }

          // Create a new user
          const newUser = new User({
              username,
              email,
              password: hash
          });

          try {
              const savedUser = await newUser.save();
              return res.status(201).json(savedUser); // 201 Created
          } catch (error) {
              console.error("Error saving user", error);
              return res.status(500).json({ msg: `Something went wrong: ${error.message}` });
          }
      });

  } catch (error) {
      console.error("Error creating user", error);
      return res.status(500).json({ msg: `Something went wrong: ${error.message}` });
  }
};



function detailencry(id) {
  return jwt.sign({ userid: id }, 'sekreteky');
}

exports.logincred = async (req, res, next) => {
  console.log("email: " + req.body.emailid);
  console.log("password: " + req.body.password);
  const passwordtemp = req.body.password;
  const emailtemp = req.body.emailid;

  try {
    const userdetail = await User.findOne({ email: emailtemp });
    console.log("count: " + (userdetail ? 1 : 0));

    if (userdetail) {
      bcrypt.compare(passwordtemp, userdetail.password, (err, result) => {
        if (err) {
          console.log("something went wrong");
          throw new Error("User not authorized!!");
        }
        if (result === true) {
          return res.status(200).json({
            success: true,
            msg: "Login Successful",
            userdetail: detailencry(userdetail._id),
            username:userdetail.fname,
            currentUserId:userdetail._id
          });
        } else {
          return res.status(401).send({ error: "User not authorized!!" });
        }
      });
    } else {
      return res.status(404).send({ error: "404 - Not Found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
};
