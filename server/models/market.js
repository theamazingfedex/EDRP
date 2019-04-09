import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const marketSchema = new Schema({
  commodities: { type: 'Array', required: false },
  economies: { type: 'Array', required: false },
  marketId: { type: 'Number', default: -1, required: false },
  prohibited: { type: 'Array', required: false },
  stationName: { type: 'String', required: true },
  systemName: { type: 'String', required: true },
  timestamp: { type: 'Date', required: false }
});

export default mongoose.model('Market', marketSchema);

