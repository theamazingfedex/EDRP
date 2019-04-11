import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RouteInputPage extends Component {
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
              <input type='check' id='include-planetary-check' />
            </div>
          </div>
          <div className='origin-container'>
            <label>Origin System:</label>
            <input type='text' id='origin-system' />
            <label>Origin Station:</label>
            <input type='text' id='origin-station' />
          </div>
          <div className='destination-container'>

          </div>
        </div>
        <style jsx>{`
          .info {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 21%;
          }
          .initial-info {
            display: flex;
            flex-direction: column;
            align-content: space-evenly;
            flex-wrap: wrap;
            height: 150px;
          }

          label {
            font-size: 14px;
            opacity: .8;
            margin-top: 10px;
            margin-bottom: 5px;
          }
        `}</style>
      </div>
    )
  };
}

export default RouteInputPage