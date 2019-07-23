import { ADD_WAYPOINT, DELETE_WAYPOINT, UPDATE_WAYPOINT, ADD_MARKET } from './WaypointActions';

// Initial State
const initialState = {
  waypoints: [
    { systemName: 'one', stationName: 'station', marketId: 1 },
    { systemName: 'two', stationName: 'station', marketId: 2 },
    { systemName: 'three', stationName: 'station', marketId: 3 },
    { systemName: 'three', stationName: 'station', marketId: 3 },
    { systemName: 'three', stationName: 'station', marketId: 3 }
  ],
  markets: []
};

const WaypointReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WAYPOINT :
      return {
        ...state,
        routes: {
          ...state.routes,
          waypoints: [...state.routes.waypoints, action.waypoint],
        }
      };

    case UPDATE_WAYPOINT :
      let waypointIndexToUpdate = -1;
      state.routes.waypoints.find((waypoint, idx) => {
        if (waypoint.marketId === action.waypoint.marketId) {
          waypointIndexToUpdate = idx;
        }
      });

      if (waypointIndexToUpdate === -1) {
        return state;
      }

      return {
        ...state,
        routes: {
          ...state.routes,
          waypoints: [...state.routes.waypoints.slice(0, waypointIndexToUpdate)].concat([action.waypoint]).concat(state.routes.waypoints.slice(waypointIndexToUpdate + 1, state.routes.waypoints.length))
        }
      };

    case DELETE_WAYPOINT :
      return {
        ...state,
        routes: {
          ...state.routes,
          waypoints: state.routes.waypoints.filter(waypoint => waypoint.marketId !== action.waypoint.marketId)
        }
      };

    case ADD_MARKET :
      let marketIndexToUpdate = -1;
      state.routes.markets.find((market, idx) => {
        if (market.marketId === action.market.marketId) {
          marketIndexToUpdate = idx;
        }
      });

      if (waypointIndexToUpdate === -1) {
        return state;
      }

      return {
        ...state,
        routes: {
          ...state.routes,
          markets: [...state.markets.slice(0, marketIndexToUpdate)].concat([action.market]).concat(state.routes.markets.slice(marketIndexToUpdate + 1, state.routes.markets.length))
        }
      };

    default:
      return state;
  }
};

/* Selectors */
export const searchMarkets = (state, systemName, stationName) => state.routes.markets.filter(market => market.systemName === systemName && market.stationName == stationName);

// Get specific market
export const getMarket = (state, marketId) => state.routes.markets.filter(market => market.marketId === marketId);
export const getMarkets = (state) => state.routes.markets;

// Get all waypoints
export const getWaypoints = state => state.routes.waypoints;

// Get waypoint by waypointId
export const getWaypoint = (state, marketId) => state.routes.waypoints.filter(waypoint => waypoint.marketId === marketId)[0];

// Export Reducer
export default WaypointReducer;
