import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createToken } from "../libs/jwt.js";
import { TOKEN_SECRET } from "../../config.js";

export class userController {
  static async register(req, res) {
    try {
      const { name, email, password, address, phone } = req.body;

      const userFound = await User.findOne({ email });

      if (userFound)
        return res.status(400).json({
          message: ["The email is already in use"],
        });

      // hashing the password
      const passwordHash = await bcrypt.hash(password, 10);

      // creating the user
      const newUser = new User({
        name,
        email,
        password: passwordHash,
        address,
        phone,
      });

      // saving the user in the database
      const userSaved = await newUser.save();

      // create access token
      const token = await createToken({
        id: userSaved._id,
      });

      res.cookie("token", token);

      res.json({
        id: userSaved._id,
        name: userSaved.name,
        email: userSaved.email,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const userFound = await User.findOne({ email });

      if (!userFound)
        return res.status(400).json({
          message: ["The email does not exist"],
        });

      const isMatch = await bcrypt.compare(password, userFound.password);

      if (!isMatch) {
        return res.status(400).json({
          message: ["The password is incorrect"],
        });
      }

      const token = await createToken({
        id: userFound._id,
      });

      res.cookie("token", token);

      res.json({
        id: userFound.id,
        name: userFound.name,
        email: userFound.email,
        role: userFound.role,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async logout(req, res) {
    res.cookie("token", "", {
      httpOnly: true,
      secure: true,
      expires: new Date(0),
    });
    return res.sendStatus(200);
  }

  static async getUser(req, res) {
    const userFound = await User.findById(req.user.id);

    if (!userFound) return res.status(400).json({ message: "user not found" });

    return res.json({
      name: userFound.name,
      email: userFound.email,
      address: userFound.address,
      phone: userFound.phone,
    });
  }

  static async updateUser(req, res) {
    const profile = await User.findByIdAndUpdate(
      req.user.id,
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!profile) return res.status(400).json({ message: "error" });
    res.json(profile);
  }
}
