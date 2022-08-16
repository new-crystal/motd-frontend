import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from ".";

export const __getPostsThunk = createAsyncThunk(
  "GET",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${serverUrl}/posts`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __deletePost = createAsyncThunk(
  "DELETE",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${serverUrl}/posts/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __updatePost = createAsyncThunk(
  "UPDATE",
  async (payload, thunkAPI) => {
    try {
      axios.patch(`${serverUrl}/posts/${payload.id}`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __addPost = createAsyncThunk("ADD", async (payload, thunkAPI) => {
  try {
    const data = await axios.post(`${serverUrl}/posts`, payload);
    return (
      axios.get(`${serverUrl}/posts`), thunkAPI.fulfillWithValue(data.data)
    );
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    // 전체 게시글 조회
    [__getPostsThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPostsThunk.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [__getPostsThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },

    // 게시글 삭제
    [__deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      const target = state.posts.findIndex(
        (post) => post.id === action.payload
      );
      state.posts.splice(target, 1);
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 게시글 수정
    [__updatePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__updatePost.fulfilled]: (state, action) => {
      const target = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      state.isLoading = false;
      state.posts.splice(target, 1, action.payload);
    },
    [__updatePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 게시글 추가
    [__addPost.fulfilled]: (state, action) => {
      state.posts = [...state, action.payload];
    },
  },
});

export const postsActions = postsSlice.actions;
export default postsSlice.reducer;
