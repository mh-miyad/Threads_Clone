import { createSlice } from "@reduxjs/toolkit";

export const utilSlicer = createSlice({
  name: "utils",
  initialState: {
    isOpen: false,
  },
  reducers: {
    setModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setModal } = utilSlicer.actions;
export default utilSlicer.reducer;
