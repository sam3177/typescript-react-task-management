import { configureStore} from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";

const data = JSON.parse(localStorage.getItem('user')) || {}


const preloadedState = {
  user:{data}
}

const configStore = ()  => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api),
      preloadedState
  });
}
export default configStore;