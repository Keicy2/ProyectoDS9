import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: false },
  images: [{ type: String }],
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model('Item', itemSchema);
