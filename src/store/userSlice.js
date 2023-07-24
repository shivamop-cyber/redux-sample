import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'shivam',
    salary: 50000,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSalary: (state, action) => {
      state.salary = action.payload;
    },
    update: (state, action) => {
      // If only name changes then the components that use name are only
      // rerendered and components with salary remain the same
      state.name = action.payload.name;
      state.salary = action.payload.salary;
    },
  },
});

export const { setName, setSalary, update } = userSlice.actions;

export default userSlice.reducer;
