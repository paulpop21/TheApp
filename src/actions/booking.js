import {
  BOOKINGS_CREATE_BOOKING_REQUEST,
  BOOKINGS_GET_LIST_REQUEST,
  BOOKINGS_CLEAR_LIST,
  BOOKINGS_EDIT_BOOKING_REQUEST,
} from '../constants/actionTypes';

export const getAllBookings = () => {
  return {
    type: BOOKINGS_GET_LIST_REQUEST,
    payload: {
      request: {
        url: '/my-bookings',
      },
    },
  };
};

export const clearBookingsList = () => {
  return {
    type: BOOKINGS_CLEAR_LIST,
  };
};

export const createBooking = (booking) => {
  return {
    type: BOOKINGS_CREATE_BOOKING_REQUEST,
    payload: {
      request: {
        method: 'post',
        url: '/bookings',
        data: booking,
      },
    },
  };
};

export const editBooking = (bookingId, booking) => {
  return {
    type: BOOKINGS_EDIT_BOOKING_REQUEST,
    payload: {
      request: {
        method: 'put',
        url: '/bookings/' + bookingId,
        data: booking,
      },
    },
  };
};
