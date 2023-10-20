import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPopularData = createAsyncThunk(
  "popular/fetchPopularData",
  async () => {
    try {
      const response = await fetch(
        "https://64dcc6a1e64a8525a0f71f73.mockapi.io/popular"
      );
      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  data: [],
  status: null,
  error: null,
  visibleCount: 10,
};

const popularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {
    increaseVisibleCount: (state) => {
        state.visibleCount += 10; 
      },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPopularData.pending, (state) => {
      state.status = "loading";
      state.error = null;
    }),
      builder.addCase(fetchPopularData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.error = null;
        state.data = action.payload;
      });
  },
});
export const { increaseVisibleCount } = popularSlice.actions;


export default popularSlice.reducer;
