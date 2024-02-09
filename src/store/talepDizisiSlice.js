import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  talepARR: [],
};

const talepArrSlice = createSlice({
  name: 'talepARR',
  initialState,
  reducers: {
    talepEkle(state, action) {
      state.talepARR.push(action.payload);
    },
    talepSil(state, action) {
      state.talepARR = state.talepARR.filter(talep => talep.id !== action.payload);
    },
    toggleTodoCompletion(state, action) {
      state.talepARR = state.talepARR.map(talep =>
        talep.id === action.payload ? { ...talep, completed: !talep.completed } : talep
      );
    },
  },
});

export const { talepEkle, talepSil, toggleTodoCompletion } = talepArrSlice.actions;
export default talepArrSlice.reducer;