import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from ".";

export const __getMusicsThunk = createAsyncThunk(
  "GET",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${serverUrl}/musics`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __deleteMusic = createAsyncThunk(
  "DELETE",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${serverUrl}/musics/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __updateMusic = createAsyncThunk(
  "UPDATE",
  async (payload, thunkAPI) => {
    try {
      axios.patch(`${serverUrl}/musics/${payload.id}`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __addMusic = createAsyncThunk("ADD", async (payload, thunkAPI) => {
  try {
    const data = await axios.post(
      `http://3.34.47.211/api/musics?title=${payload.title}&artist=${payload.artist}&album=${payload.album}`,
      payload.formData,
      {
        headers: {
          "Content-type": "multipart/form-data",
        },
      }
    );
    axios.get(`${serverUrl}/musics`);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

const initialState = {
  musics: {
    list: [],
    isLoading: false,
    error: null,
  },
  commentsByMusicId: {
    list: [],
    isLoading: false,
    error: null,
  },
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    // 전체 음악 게시글 조회
    // [__getMusicsThunk.pending]: (state) => {
    //   state.comments.isLoading = true;
    // },
    // [__getMusicsThunk.fulfilled]: (state, action) => {
    //   state.comments.isLoading = false;
    //   state.comments.list = action.payload;
    // },
    // [__getMusicsThunk.rejected]: (state, action) => {
    //   state.comments.isLoading = false;
    //   state.comments.error = action.payload;
    // },

    // // 음악 게시글 삭제
    // [__deleteMusic.pending]: (state) => {
    //   state.commentsByMusicId.isLoading = true;
    // },
    // [__deleteMusic.fulfilled]: (state, action) => {
    //   state.commentsByMusicId.isLoading = false;
    //   const target = state.commentsByMusicId.data.findIndex(
    //     (comment) => comment.id === action.payload
    //   );
    //   state.commentsByMusicId.data.splice(target, 1);
    // },
    // [__deleteMusic.rejected]: (state, action) => {
    //   state.commentsByMusicId.isLoading = false;
    //   state.commentsByMusicId.error = action.payload;
    // },

    // // 음악 게시글 수정
    // [__updateMusic.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__updateMusic.fulfilled]: (state, action) => {
    //   const target = state.commentsByMusicId.data.findIndex(
    //     (comment) => comment.id === action.payload.id
    //   );
    //   state.isLoading = false;
    //   state.commentsByMusicId.data.splice(target, 1, action.payload);
    // },
    // [__updateMusic.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // 음악 게시글 추가
    [__addMusic.pending]: (state) => {
      state.commentsByMusicId.isLoading = true;
    },
    [__addMusic.fulfilled]: (state, action) => {
      state.commentsByMusicId.isLoading = false;
      state.commentsByMusicId.list = [...state, action.payload];
    },
    [__addMusic.rejected]: (state, action) => {
      state.commentsByMusicId.isLoading = false;
      state.commentsByMusicId.error = action.payload;
    },
  },
});

export const commentsActions = commentsSlice.actions;
export default commentsSlice.reducer;
