import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  url: String,
  name: String,
  brand: String,
  price: Number,
  stars: Number
});

const productModel = mongoose.model('Product', schema);

export default productModel;
