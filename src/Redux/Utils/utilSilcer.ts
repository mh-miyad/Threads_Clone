import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const utilSlicer = createSlice({
  name: "utils",
  initialState: {
    isOpen: false,
  },
  reducers: {
    setModal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = !action.payload || !state.isOpen;
    },
  },
});

export const { setModal } = utilSlicer.actions;
export default utilSlicer.reducer;
