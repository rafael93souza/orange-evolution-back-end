const LoginService = require('../services/Login.service');

const signIn = async (req, res) => {
  try {
    const token = await LoginService.signIn(req.body);
    return res.status(200).json(token);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = { signIn };
