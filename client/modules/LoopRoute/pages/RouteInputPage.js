import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMarkets, getWaypoints } from '../LoopRouteReducer';

class RouteInputPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWaypoints: [
        {systemName: 'one', stationName: 'station'},
        {systemName: 'two', stationName: 'station'},
        {systemName: 'three', stationName: 'station'}
      ]
    };
  }

  getWaypointsToDisplay(waypoints) {
    return waypoints.map((station, idx) =>
      <div className='destination waypoint' key={idx}>
        <div className='waypoint-name'>
          <label>Destination #{idx + 1}</label>
          <div className='waypoint-name-system'>
            <label>System Name:</label>
            <input type='text' value={station.systemName} disabled />
          </div>
          <div className='waypoint-name-station'>
            <label>Station Name:</label>
            <input type='text' value={station.stationName} disabled />
          </div>
          <div className='waypoint-commodities'>
            <div className='waypoint-commodities-include'>
              <label>Commodities to Exclude:</label>
              <input type='text' className='commodities-include' />
            </div>
            <div className='waypoint-commodities-exclude'>
              <label>Commodities to Include:</label>
              <input type='text' className='commodities-exclude' />
            </div>
          </div>
          <div className='waypoint-distances'>
            <div className='waypoint-distances-system'>
              <label>Distance to Star:</label>
              <input type='text' className='distance-to-star' value='' disabled/>
            </div>
            <div className='waypoint-distances-station'>
              <label>Distance to Station:</label>
              <input type='text' className='distance-to-station' value='' disabled/>
            </div>
          </div>
        </div>
      </div>
    );
              {/* systemName
              stationName
              commodityToSellHere
                price,
                quantity
              commodityToBuyHere
                price,
                quantity
              distanceFromStar */}
  }
  render() {
    const waypoints = this.state.waypoints;
    console.log('waypoints: ', waypoints);
    return (
      <div className='route-input-container'>
        <div className='commodity-info'>
          <div className='initial-info'>
            <div className='info included-commodities'>
              <label>Included Commodities:</label>
              <input type='text' id='included-commodities' />
            </div>
            <div className='info excluded-commodities'>
              <label>Excluded Commodities:</label>
              <input type='text' id='excluded-commodities' />
            </div>
            <div className='info max-jump-range'>
              <label>Max Jump-Range:</label>
              <input type='number' id='max-jump-range' />
            </div>
            <div className='info max-cargo-space'>
              <label>Max Cargo Space:</label>
              <input type='number' id='max-cargo-space' />
            </div>
            <div className='info max-station-distance'>
              <label>Max Station Distance:</label>
              <input type='number' id='max-station-distance' />
            </div>
            <div className='info include-planetary-check'>
              <label>Include Planetary?</label>
              <input type='check' id='include-planetary-check' />
            </div>
          </div>
          <div className='origin-container'>
            <div className='origin system'>
              <label>Origin System:</label>
              <input type='text' id='origin-system' />
            </div>
            <div className='origin station'>
              <label>Origin Station:</label>
              <input type='text' id='origin-station' />
            </div>
          </div>
          <div className='destination-container'>
            {/* {this.getWaypointsToDisplay(waypoints)} */}
          </div>
        </div>
        <style jsx>{`
          .info {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 21%;
            max-height: 60px;
          }
          .initial-info {
            display: flex;
            flex-direction: column;
            align-content: space-evenly;
            flex-wrap: wrap;
            max-height: 120px;
          }
          .origin-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: space-around;
          }
          .origin {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            margin: 10px;
          }

          input {
            border: 2px solid #CCC;
            border-radius: 5px;
            line-height: 25px;
            padding: 0 5px 0 5px;
          }

          button:focus,
          select:focus,
          input:focus {
            outline: none;
          }

          label {
            font-size: 14px;
            opacity: .6;
            margin-top: 10px;
            margin-bottom: 5px;
            font-weight: bold;
          }
        `}</style>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    waypoints: getWaypoints(state),
    markets: getMarkets(state)
  };
}

export default connect(mapStateToProps)(RouteInputPage);