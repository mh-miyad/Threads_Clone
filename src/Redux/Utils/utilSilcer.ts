import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const utilSlicer = createSlice({
  name: "utils",
  initialState: {
    isOpen: false,
    isImageLoaded: false,
    image: {
      imgUpdate: false,
      data: {
        img: null,
        postID: null,
      },
    },
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
    updateImage: (
      state,
      action: PayloadAction<{
        image: { imgUpdate: boolean; data: { img: any; postID: any } };
      }>
    ) => {
      state.image.imgUpdate = action.payload.image.imgUpdate;
      state.image.data = action.payload.image.data;
    },
  },
});

export const { setModal, setIsImageLoaded, updateImage } = utilSlicer.actions;
export default utilSlicer.reducer;
