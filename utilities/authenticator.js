module.exports = isAuthenticated;

function isAuthenticated(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ message: `Unauthorized` });
  }
  next();
}