import { createSlice } from "@reduxjs/toolkit";

const webSeriesSlice = createSlice({
  name: "movie",
  initialState: {},
  reducers: {
    setWebSeries: (state, action) => {
      const { webSeriesType, webSeriesData } = action.payload;
      state[webSeriesType] = webSeriesData;
    },
  },
});

export const { setWebSeries } = webSeriesSlice.actions;

export default webSeriesSlice.reducer;
