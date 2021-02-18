import jwt from 'jsonwebtoken';

const JWT_SECRET = 'Lkjaldksjfash33##asdfsfd1';

const getToken = (user) => {
  const data = {
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin
  };
  return jwt.sign(data, JWT_SECRET, {
    expiresIn: '48h'
  });
};

export {
  getToken
};
