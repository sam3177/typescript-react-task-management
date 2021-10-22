import axios from "axios";
import * as actions from "../api";
export const baseURL = "http://localhost:3000"
const api = ({ dispatch }) => next => async action => {
  
  console.log('hello there api file')
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError, accessToken } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action);

  try {
    const response = await axios.request({
      headers:{
        'Authorization': 'Bearer ' + accessToken,
      },
      baseURL,
      url,
      method,
      data
    });
    // General
    console.log('hello there')
    dispatch(actions.apiCallSuccess(response.data));
    // Specific
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    // General
    dispatch(actions.apiCallFailed(error.message));
    // Specific
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;
