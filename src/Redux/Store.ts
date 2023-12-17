import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./DarkTheme/ThemeSlice";
import utilSilcer from "./Utils/utilSilcer";
import { userApi } from "./AsyncThunk/user";
import { postApi } from "./AsyncThunk/userPost";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    utils: utilSilcer,
    [userApi.reducerPath]: userApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, postApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
