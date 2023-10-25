import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSmartphonesData = createAsyncThunk(
  "smartphones/fetchSmartphonesData",
  async () => {
    try {
      const response = await fetch(
        "https://64dcc6a1e64a8525a0f71f73.mockapi.io/allProducts?category=smartphones"
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
  visibleCount: 8,
};

const smartphonesSlice = createSlice({
  name: "smartphones",
  initialState,
  reducers: {
    increaseVisibleCount: (state) => {
        state.visibleCount += 10; 
      },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSmartphonesData.pending, (state) => {
      state.status = "loading";
      state.error = null;
    }),
      builder.addCase(fetchSmartphonesData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.error = null;
        state.data = action.payload;
      });
  },
});
export const { increaseVisibleCount } = smartphonesSlice.actions;


export default smartphonesSlice.reducer;