import { BOOKINGS_CREATE_BOOKING_REQUEST } from '../constants/actionTypes';

export function createBooking (booking) {
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
