import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filmItems: [],
  loading: false,
  err: null,
};

// toolkit slice

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    getFilms(state) {
      state.loading = true;
      state.err = null;
    },
    getFilmsSuccess(state, action) {
      state.loading = false;
      state.err = null;
      state.filmItems = action.payload;
    },
    getFilmsFailure(state, action) {
      state.loading = false;
      state.err = action.payload;
    },
  },
});

export const { getFilms, getFilmsSuccess, getFilmsFailure } =
  filmsSlice.actions;

export default filmsSlice.reducer;
