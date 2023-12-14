import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./DarkTheme/ThemeSlice";
import utilSilcer from "./Utils/utilSilcer";
import { userApi } from "./AsyncThunk/user";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    utils: utilSilcer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
