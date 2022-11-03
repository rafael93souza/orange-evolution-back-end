const jtw = require('jsonwebtoken');

const generationToken = (data) => {
  const config = { algorithm: 'HS256', expiresIn: '2d' };

  const payload = { sub: data.id, name: data.name, email: data.email };

  const token = jtw.sign({ payload }, process.env.SECRET_KEY, config);

  return token;
};

const decodedToken = (token) => {
  try {
    const decoded = jtw.verify(token, process.env.SECRET_KEY);
    return decoded;
  } catch (error) {
    return false;
  }
};

module.exports = {
  generationToken,
  decodedToken,
};
