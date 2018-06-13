import * as actionTypes from '../constants/actionTypes';

const defaultState = {
  carsList: [],
  loading: false,
};

const carReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CAR_GET_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case actionTypes.CAR_GET_LIST_SUCCESS: {
      return {
        ...state,
        carsList: action.payload.data,
        loading: false,
      };
    }

    case actionTypes.CAR_CLEAR_LIST: {
      return {
        ...state,
        carsList: [],
      };
    }

    case actionTypes.CAR_GET_LIST_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default carReducer;
