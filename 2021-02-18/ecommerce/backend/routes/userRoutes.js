import express from 'express';
import User from '../models/userModel.js';

import { getToken } from '../util.js';

const router = express.Router();

router.get('/createadmin', async (_, res) => {
  const admin = await User({
    name: 'admin',
    email: 'admin@ubu.ac.th',
    password: 'pass',
    isAdmin: true
  });
  admin.save();
  res.send(admin);
});
router.get('/createuser', async (_, res) => {
  const paul = await User({
    name: 'paul',
    email: 'paul@ubu.ac.th',
    password: 'pass'
  });
  paul.save();
  res.send(paul);
});
router.get('/all', async (_, res) => {
  res.send(await User.find());
});
router.get('/:id', async (req, res) => {
  const uid = req.params.id;
  res.send(await User.find({_id: uid}));
});

router.post("/signin", async (req, res) => {
  //console.log(`req.body: ${req.body}`)
  console.log(`email: ${req.body.email}`)
  console.log(`password: ${req.body.password}`)
  const user = await User.findOne({email: req.body.email, password: req.body.password});
  console.log(user);
  if ( user ) { // login ผ่าน
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: getToken(user)
    });
  } else {
    res.status(401).send({ msg: 'email หรือ รหัสผ่าน ผิด'});
  }
});

//router.put()
//router.delete()
//router.post()
//
export default router;
