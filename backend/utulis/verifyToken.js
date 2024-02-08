import jwt from "jsonwebtoken";
import parseRequest from "parse-request";

export const verifyToken = (req, res, next) => {
  const _req = parseRequest(req);

  const token = _req.headers.token;

  if (!token) {
    res.status(401).json({
      success: false,
      message: "you're not authorize",
    });
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "you're token is Invalid",
      });
    }
    req.user = user;
    next();
  });
};
export const verifyUser = (req, res, next) => {
  console.log("verifyUser", req);
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role === "admin") {
      next();
    } else {
      res.status(401).json({
        success: false,
        message: "you are not Authenteficated",
      });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  console.log("verifyAdmin", req);
  verifyToken(req, res, next, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      res.status(401).json({
        success: false,
        message: "you are not Authenterize",
      });
    }
  });
};
