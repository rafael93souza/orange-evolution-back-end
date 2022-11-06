const LoginServiceAdmin = require('../services/LoginAdmin.service');

const signIn = async (req, res) => {
  const token = await LoginServiceAdmin.signIn(req.body);
  return res.status(200).json(token);
};
module.exports = { signIn };
