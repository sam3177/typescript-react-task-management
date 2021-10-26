import Store from '../types/State'

const toast = (store: Store) => (next:any) => (action:any) => {
  if (action.type === "error") console.log("Toastify", action.payload.message);
  else return next(action);
};

export default toast;
