import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commoditySchema = new Schema({
  buyPrice: { type: 'Number', required: true },
  demand: { type: 'Number', required: true },
  demandBracket: { type: 'Number', required: true },
  meanPrice: { type: 'Number', required: true },
  name: { type: 'String', required: true },
  sellPrice: { type: 'Number', required: true },
  stock: { type: 'Number', required: true },
  stockBracket: { type: 'Number', required: true }
});

export default mongoose.model('Commodity', commoditySchema);
