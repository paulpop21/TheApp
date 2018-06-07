import { CAR_GET_LIST_REQUEST } from '../constants/actionTypes';

export function getAllCars () {
  return {
    type: CAR_GET_LIST_REQUEST,
    payload: {
      request: {
        url: '/cars',
      },
    },
  };
}
