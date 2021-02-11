import express from 'express';
import mongoose from 'mongoose';
//import User from './models/userModel.js';
import userRoutes from './routes/userRoutes.js';

import products from './data.js';

// $ mongo --username admin --password pass
// mongo>>> use mynewdb;
// mongo>>> db.createUser({ user: 'admin', pwd: 'pass', roles: [ { role: "readWrite", db: "mynewdb" } ] })

const mongourl = 'mongodb://admin:pass@localhost/mynewdb';
//const mongourl = "mongodb+srv://admin:pass@cluster0.bcaja.mongodb.net/mynewdb?retryWrites=true&w=majority";
mongoose.connect(mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch((error) => {
  console.log('เกิด error');
  console.log(error);
});

const Cat = mongoose.model('Cat', { name: String });

function testCreateCat() {
  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save().then(() => {
    console.log('meow');
    console.log('done - เขียน Cat แล้ว 1 ตัว');
  });
}

const app = express();

//app.get('/api/users', async (_, res) => {
//  const users = await User.find({});
//  res.send(users);
//});
app.use('/api/users', userRoutes);

app.get('/api/cats', async (_, res) => {
  const cats = await Cat.find({});
  res.send(cats);
});

// list ทั้งหมดของ products
app.get('/api/products', (_, res) => {
  res.send(products);
});

// product._id 
app.get('/api/product/:id', (_, res) => {
  // const product = products.find(x => x._id === req.params.id);
  res.send(product);
})

// เริ่มเปิด server ที่ port 5000
app.listen(5000, () => {
  console.log('starting server แล้วเด้อ');
  console.log('ทดสอบ');
});
