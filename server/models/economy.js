import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const economySchema = new Schema({
  name: { type: 'String', required: true },
  proportion: { type: 'Number', required: true }
});

export default mongoose.model('Economy', economySchema);
