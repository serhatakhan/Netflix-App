import {createSlice} from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notifications: [],
    count: 0,
  },
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
    setNotification: (state, action) => {
      state.notifications = [...state.notifications, action.payload];
    },
  }
  // istek atmadığımız için builder kullanmayabiliriz
});

export const { increment, decrement, setNotification } = notificationSlice.actions

export default notificationSlice.reducer;
