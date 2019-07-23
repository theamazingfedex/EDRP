import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMarkets, getWaypoints } from '../WaypointReducer';

class RouteInputPage extends Component {
  getWaypointsToDisplay(waypoints) {
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
              <input type='checkbox' id='include-planetary-check' />
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
            {this.props.waypoints.map((station, idx) => {
              return (
              <div className='destination-waypoint' key={idx}>
                <div className='waypoint-label'>
                  <div className='waypoint-label-index'>
                    <label>Waypoint #{idx + 1}</label>
                  </div>
                  <div className='waypoint-label-sell'>
                    <label>Sell:<br/><span className='waypoint-label-sell-commodity'>N/A{/* station.bestCommodityToSell */}</span></label>
                  </div>
                  <div className='waypoint-label-buy'>
                    <label>Buy:<br/><span className='waypoint-label-buy-commodity'>Medical Supplies{/* station.bestCommodityToBuy */}</span></label>
                  </div>
                </div>
                <div className='waypoint-name waypoint-item'>
                  <div className='waypoint-name-system waypoint-item'>
                    <label>System Name:</label>
                    <input type='text' value={station.systemName} disabled />
                  </div>
                  <div className='waypoint-name-station waypoint-item'>
                    <label>Station Name:</label>
                    <input type='text' value={station.stationName} disabled />
                  </div>
                </div>
                <div className='waypoint-commodities waypoint-item'>
                  <div className='waypoint-commodities-include waypoint-item'>
                    <label>Commodities to Exclude:</label>
                    <input type='text' className='commodities-include' />
                  </div>
                  <div className='waypoint-commodities-exclude waypoint-item'>
                    <label>Commodities to Include:</label>
                    <input type='text' className='commodities-exclude' />
                  </div>
                </div>
                <div className='waypoint-distances waypoint-item'>
                  <div className='waypoint-distances-system waypoint-item'>
                    <label>Distance to Star:</label>
                    <input type='text' className='distance-to-star' value='' disabled />
                  </div>
                  <div className='waypoint-distances-station waypoint-item'>
                    <label>Distance to Station:</label>
                    <input type='text' className='distance-to-station' value='' disabled />
                  </div>
                </div>
              </div>
            )})}
            {/* {this.getWaypointsToDisplay(this.props.waypoints)} */}
            <div className='waypoint-destination-add'><div className='add-button' title='Add Waypoint'></div></div>
          </div>
        </div>
        <style jsx>{`
          .waypoint-item {
            display: flex;
            flex-direction: column;
            grid-row-start: waypoint-content;
            flex-grow: 2;
          }
          .waypoint-label {
            width: 100%;
            grid-row-start: waypoint-label;
            grid-column: waypoint-name / 4;
            display: flex;
            justify-content: space-between;
          }

          .waypoint-label-sell-commodity,
          .waypoint-label-buy-commodity {
            margin-left: 10px;
            color: #FF8800;
          }

          .waypoint-destination-add {
            display: flex;
            justify-content: center;
          }

          .waypoint-distances {
            grid-column-start: waypoint-distances
          }
          .waypoint-commodities {
            grid-column-start: waypoint-commodities;
          }
          .waypoint-name {
            grid-column-start: waypoint-name;
          }
          .waypoint-name,
          .waypoint-distances,
          .waypoint-commodities {
            margin: 10px 10px 10px 5px;
          }
          .destination-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 30px 0 30px 0;
          }

          .destination-waypoint {
            border: 2px solid #ff8800;
            margin-bottom: 30px;
            min-height: 100px;
            border-radius: 5px;
            padding: 10px;
            display: grid;
            grid-template-rows: [waypoint-label] 1fr [waypoint-content] 4fr;
            grid-template-columns: [waypoint-name] 2fr [waypoint-commodities] 2fr [waypoint-distances] 1fr;
          }
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
          .add-button {
            border: 1px dotted black;
            width: 2.5px;
            height: 2.5px;
            background-color: #FF8800;
            box-sizing: border-box;
            transform: scale(11);
            border-radius: 10px;
            box-shadow: 0 0 0.2px 0.2px #666;
          }
          .add-button:hover {
            transform: scale(12);
            cursor: pointer;
          }
          .add-button:active {
            transform: scale(10);
          }
          .remove-button {
            border: 1px dotted black;
            width: 2.5px;
            height: 2.5px;
            background-color: #FF8800;
            box-sizing: border-box;
            transform: scale(11) rotate(45deg);
            border-radius: 10px;
            box-shadow: 0 0 0.2px 0.2px #666;
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

RouteInputPage.contextTypes = {
  router: PropTypes.object,
};

RouteInputPage.propTypes = {
  waypoints: PropTypes.array,
  markets: PropTypes.array
};

export default connect(mapStateToProps)(RouteInputPage);