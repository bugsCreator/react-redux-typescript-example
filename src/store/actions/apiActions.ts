// src/store/actions/apiActions.ts

import { Dispatch } from "redux";
import axios from "axios";

// Action Types
const API_REQUEST = "API_REQUEST";
const API_SUCCESS = "API_SUCCESS";
const API_FAILURE = "API_FAILURE";

// Action Creators
const apiRequest = () => ({
  type: API_REQUEST,
});

const apiSuccess = (data: any) => ({
  type: API_SUCCESS,
  payload: data,
});

const apiFailure = (error: string) => ({
  type: API_FAILURE,
  payload: error,
});
const apiKey = process.env.REACT_APP_API_KEY || "";
// Async action to fetch data from API
export const fetchDataFromApi = (query: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(apiRequest());
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}&per_page=10`,
        {
          headers: {
            Authorization:
              "cjZZyZJrzjwR8lwd9fqRilNQvZrjiV2rTsXwPbdLrgoADCmezz0nmW4D",
          },
        }
      ); // Replace with your API endpoint
      dispatch(apiSuccess(response.data));
    } catch (error) {
      dispatch(apiFailure("Failed to fetch data."));
    }
  };
};
