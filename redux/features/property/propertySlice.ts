import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  property: [],
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setProperty: (state, action) => {
      state.property = action.payload;
    },
  },
});

export const { setProperty } = propertySlice.actions;

export default propertySlice.reducer;
