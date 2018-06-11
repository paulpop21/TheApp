import * as actionTypes from '../constants/actionTypes';

const defaultState = {
  bookingsList: [],
  newBooking: {},
  loading: false,
};

export default function bookingReducer (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.BOOKINGS_GET_LIST_REQUEST:
    case actionTypes.BOOKINGS_EDIT_BOOKING_REQUEST:
    case actionTypes.BOOKINGS_CREATE_BOOKING_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case actionTypes.BOOKINGS_EDIT_BOOKING_SUCCESS:
    case actionTypes.BOOKINGS_CREATE_BOOKING_SUCCESS: {
      return {
        ...state,
        newBooking: action.payload.data,
        loading: false,
      };
    }

    case actionTypes.BOOKINGS_GET_LIST_SUCCESS: {
      return {
        ...state,
        bookingsList: action.payload.data,
        loading: false,
      };
    }

    case actionTypes.BOOKINGS_GET_LIST_ERROR:
    case actionTypes.BOOKINGS_EDIT_BOOKING_ERROR:
    case actionTypes.BOOKINGS_CREATE_BOOKING_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}
