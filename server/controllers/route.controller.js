import Market from '../models/market';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all Markets within a given range with 
 * @param req
 * @param res
 * @returns void
 */
export function getMarkets(req, res) {
  Market.find().sort('-timestamp').exec((err, markets) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts: markets });
  });
}
export function saveMarket(req, res) {
  var marketToAdd = new Market(req.body.market);
  marketToAdd.save();
  console.log('saved market: ', marketToAdd.systemName);
}


