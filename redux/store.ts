import { configureStore } from "@reduxjs/toolkit";
import mobileNavReducer from "./reducers/mobileNavReducer"

const store = configureStore({
  reducer: {
    mobileNavReducer
  },
});

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
