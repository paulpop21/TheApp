import { CAR_CLEAR_LIST, CAR_GET_LIST_REQUEST } from '../constants/actionTypes';

export const getAllCars = () => {
  return {
    type: CAR_GET_LIST_REQUEST,
    payload: {
      request: {
        url: '/cars',
      },
    },
  };
};

export const clearCarsList = () => {
  return {
    type: CAR_CLEAR_LIST,
  };
};
