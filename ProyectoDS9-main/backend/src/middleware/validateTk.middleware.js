import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../../config.js";

export const authToken = (req, res, next) => {
  const  {token}  = req.cookies;

  if (!token) return res.send(false);

  jwt.verify(token, TOKEN_SECRET, (error, user) => {

    if (error) return res.status(403).json({ message: "invalid token" });

    req.user = user;
    
    next();
  });
};
