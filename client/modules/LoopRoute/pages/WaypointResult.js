import React from 'react';
import PropTypes from 'prop-types';

let WaypointResult = (props) => {
  console.log('waypoint props: ', props);
  return (
    <div className='waypoint-result'>
      <div className='location-container origin-container'>
        <p className='system-name'><span>System:</span> {props.origin.systemName}</p>
        <p className='station-name'><span>Station:</span> {props.origin.stationName}</p>
      </div>
      <div className='commodity-container'>
        <p className='commodity-value commodity-purchase-value'><span>Buy:</span> {props.buyPrice}</p>
        <div className='commodity-info'>
          <p className='commodity-name'><span>Commodity:</span> {props.commodityName}</p>
          <p className='commodity-count'><span>Quantity:</span> {props.commodityCount}</p>
        </div>
        <p className='commodity-value commodity-sell-value'><span>Sell:</span> {props.sellPrice}</p>
      </div>
      <div className='location-container destination-container'>
        <p className='system-name'><span>System:</span> {props.destination.systemName}</p>
        <p className='station-name'><span>Station:</span> {props.destination.stationName}</p>
      </div>
      <style jsx>{`
        .commodity-container {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .commodity-container p {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 5px;
        }
        .commodity-value {
          align-self: center;
        }
        .commodity-container span,
        .location-container span {
          font-size: 12px;
          opacity: .8;
          margin: 5px;
        }
        .waypoint-result {
          border: 2px solid #66aaef;
          width: 90%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 5px;
        }
        .location-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 10px;
        }
        .station-name,
        .system-name {
          font-weight: bold;
          font-size: 22px;
        }
        p {
          font-weight: bold;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}
WaypointResult.propTypes = {
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
};

export default WaypointResult;