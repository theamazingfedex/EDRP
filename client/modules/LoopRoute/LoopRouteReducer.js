import { ADD_WAYPOINT, DELETE_WAYPOINT, UPDATE_WAYPOINT, ADD_MARKET } from './LoopRouteActions';

// Initial State
const initialState = { waypoints: [], markets: [] };

const WaypointReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WAYPOINT :
      return {
        ...state,
        waypoints: [...state.waypoints, action.waypoint],
      };

    case UPDATE_WAYPOINT :
      let waypointIndexToUpdate = -1;
      state.waypoints.find((waypoint, idx) => {
        if (waypoint.marketId === action.waypoint.marketId) {
          waypointIndexToUpdate = idx;
        }
      });

      if (waypointIndexToUpdate === -1) {
        return state;
      }

      return {
        ...state,
        waypoints: [...state.waypoints.slice(0, waypointIndexToUpdate)].concat([action.waypoint]).concat(state.waypoints.slice(waypointIndexToUpdate + 1, state.waypoints.length))
      };

    case DELETE_WAYPOINT :
      return {
        ...state,
        waypoints: state.waypoints.filter(waypoint => waypoint.marketId !== action.waypoint.marketId),
      };

    case ADD_MARKET :
      let marketIndexToUpdate = -1;
      state.markets.find((market, idx) => {
        if (market.marketId === action.market.marketId) {
          marketIndexToUpdate = idx;
        }
      });

      if (waypointIndexToUpdate === -1) {
        return state;
      }

      return {
        ...state,
        markets: [...state.markets.slice(0, marketIndexToUpdate)].concat([action.market]).concat(state.markets.slice(marketIndexToUpdate + 1, state.markets.length))
      };

    default:
      return state;
  }
};

/* Selectors */
export const searchMarkets = (state, systemName, stationName) => state.markets.filter(market => market.systemName === systemName && market.stationName == stationName);

// Get specific market
export const getMarket = (state, marketId) => state.markets.filter(market => market.marketId === marketId);
export const getMarkets = (state) => state.markets;

// Get all waypoints
export const getWaypoints = state => state.waypoints;

// Get waypoint by waypointId
export const getWaypoint = (state, marketId) => state.waypoints.filter(waypoint => waypoint.marketId === marketId)[0];

// Export Reducer
export default WaypointReducer;
