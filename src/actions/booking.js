import { BOOKINGS_CREATE_BOOKING_REQUEST, BOOKINGS_GET_LIST_REQUEST } from '../constants/actionTypes';

export function getAllBookings() {
  return {
    type: BOOKINGS_GET_LIST_REQUEST,
    payload: {
      request: {
        url: '/my-bookings',
      },
    },
  };
}

export function createBooking(booking) {
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
}
