const LoginService = require('../services/Login.service');

const signIn = async (req, res) => {
  const token = await LoginService.signIn(req.body);
  return res.status(200).json(token);
};

module.exports = { signIn };
