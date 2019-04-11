import React from 'react';
import PropTypes from 'prop-types';
import WaypointResult from './WaypointResult';

const routes = [
  { origin: { stationName: 'Briggs Station', systemName: 'Joe-Bob Nebula' }, destination: { stationName: 'Halsey Terminal', systemName: 'HIP 11275' }, commodityName: 'Space Weed', commodityCount: 420, distanceFromStar: 365, profitAmount: 10000, buyPrice: 4, sellPrice: 12 },
  { origin: { stationName: 'Halsey Terminal', systemName: 'HIP 11275' }, destination: { stationName: 'Lycan Orbital', systemName: 'Wolf 33862' }, commodityName: 'Baked Beans', commodityCount: 720, distanceFromStar: 275, profitAmount: 8000, buyPrice: 250, sellPrice: 8625 }
];

const RouteResultPage = (props) =>
  <div className='route-results-page'>
    <h3>Trade Route:</h3>
    <div className='route-results'>
      {routes.map((route, idx) =>
        <WaypointResult
          key={idx}
          origin={route.origin}
          destination={route.destination}
          commodityName={route.commodityName}
          commodityCount={route.commodityCount}
          distanceFromStar={route.distanceFromStar}
          profitAmount={route.profitAmount}
          buyPrice={route.buyPrice}
          sellPrice={route.sellPrice}
        />
      )}
    </div>
    <style jsx>{`
      .route-results {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
  </div>;

RouteResultPage.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    origin: PropTypes.shape({
      stationName: PropTypes.string.isRequired,
      systemName: PropTypes.string.isRequired
    }),
    destination: PropTypes.shape({
      stationName: PropTypes.string.isRequired,
      systemName: PropTypes.string.isRequired
    }),
    commodityName: PropTypes.string.isRequired,
    commodityCount: PropTypes.number.isRequired,
    distanceFromStar: PropTypes.number,
    profitAmount: PropTypes.number,
    buyPrice: PropTypes.number.isRequired,
    sellPrice: PropTypes.number.isRequired
  }))
};

export default RouteResultPage;