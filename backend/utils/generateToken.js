import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (UserId, res) => {
  const token = jwt.sign({ UserId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // to prevent XSS attack cross-site scripting attack
    sameSite: "strict", // to prevent CSRF attack cross-site request forgery
    secure: process.env.NODE_ENV !== "development", // to make sure that the cookie is only sent on HTTPS
  });
};

export default generateTokenAndSetCookie;
