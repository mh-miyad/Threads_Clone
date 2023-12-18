import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const utilSlicer = createSlice({
  name: "utils",
  initialState: {
    isOpen: false,
    isImageLoaded: false,
    avatar: false,
    data: {
      img: null,
      postID: null,
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
    updateAvatar: (state, action: PayloadAction<{ avatar: boolean }>) => {
      state.avatar = action.payload.avatar;
    },
    updateImage: (
      state,
      action: PayloadAction<{ data: { img: any; postID: any } }>
    ) => {
      state.data = action.payload.data;
    },
  },
});

export const { setModal, setIsImageLoaded, updateImage, updateAvatar } =
  utilSlicer.actions;
export default utilSlicer.reducer;
