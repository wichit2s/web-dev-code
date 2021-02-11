import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();

router.get('/all', async (_, res) => {
  res.send(await User.find());
});
router.get('/:id', async (_, res) => {
  const uid = req.params.id;
  res.send(await User.find({_id: uid}));
});

//router.put()
//router.delete()
//router.post()
//
export default router;
