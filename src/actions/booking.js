import {
  BOOKINGS_CREATE_BOOKING_REQUEST,
  BOOKINGS_GET_LIST_REQUEST,
  BOOKINGS_CLEAR_LIST,
  BOOKINGS_EDIT_BOOKING_REQUEST,
} from '../constants/actionTypes';

export const getAllBookings = () => ({
  type: BOOKINGS_GET_LIST_REQUEST,
  payload: {
    request: {
      url: '/my-bookings',
    },
  },
});

export const clearBookingsList = () => ({
  type: BOOKINGS_CLEAR_LIST,
});

export const createBooking = booking => ({
  type: BOOKINGS_CREATE_BOOKING_REQUEST,
  payload: {
    request: {
      method: 'post',
      url: '/bookings',
      data: booking,
    },
  },
});

export const editBooking = (bookingId, booking) => ({
  type: BOOKINGS_EDIT_BOOKING_REQUEST,
  payload: {
    request: {
      method: 'put',
      url: `/bookings/${bookingId}`,
      data: booking,
    },
  },
});
