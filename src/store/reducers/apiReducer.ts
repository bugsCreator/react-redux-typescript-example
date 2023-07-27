// src/store/reducers/apiReducer.ts

import { AnyAction } from 'redux';

interface ApiState {
  loading: boolean;
  data: any; // Adjust the data type based on your API response
  error: string | null;
}

const initialState: ApiState = {
  loading: false,
  data: null,
  error: null,
};

const apiReducer = (state = initialState, action: AnyAction): ApiState => {
  switch (action.type) {
    case 'API_REQUEST':
      return { ...state, loading: true, error: null };
    case 'API_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'API_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default apiReducer;
