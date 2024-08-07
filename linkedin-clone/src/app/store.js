import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';


const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};

const peristedState = loadState();

export const store = configureStore({
  preloadedState: peristedState,

  reducer: {
    user: userReducer,
  },
});
store.subscribe(() => {
  saveState(store.getState());
})