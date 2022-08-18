import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from ".";

export const __getMusicsThunk = createAsyncThunk(
  "GET",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${serverUrl}/musics`);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.code);
    }
  }
);

export const __addMusic = createAsyncThunk("ADD", async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post(
      `http://3.34.47.211:3000/api/musics?title=${payload.title}&artist=${payload.artist}&album=${payload.album}`,
      payload.formData,
      {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${payload.token}`,
        },
      }
    );
    console.log(data);
    return thunkAPI.fulfillWithValue(data);
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

    // 음악 게시글 추가
    [__addMusic.pending]: (state) => {
      state.musics.isLoading = true;
    },
    [__addMusic.fulfilled]: (state, action) => {
      state.musics.isLoading = false;
      state.musics.data = action.payload;
    },
    [__addMusic.rejected]: (state, action) => {
      state.musics.isLoading = false;
      state.musics.error = action.payload;
    },
  },
});

export const commentsActions = commentsSlice.actions;
export default commentsSlice.reducer;
