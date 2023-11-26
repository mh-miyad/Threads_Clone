import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const utilSlicer = createSlice({
  name: "utils",
  initialState: {
    isOpen: false,
    isImageLoaded: false,
  },
  reducers: {
    setModal: (state, action: PayloadAction<{ isOpen: boolean }>) => {
      state.isOpen = action.payload.isOpen;
    },
    setIsImageLoaded: (
      state,
      action: PayloadAction<{ isImageLoaded: boolean }>
    ) => {
      state.isImageLoaded = action.payload.isImageLoaded;
    },
  },
});

export const { setModal, setIsImageLoaded } = utilSlicer.actions;
export default utilSlicer.reducer;
