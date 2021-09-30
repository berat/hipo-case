import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { api } from "../utils/api";

const photo = createSlice({
  name: "photo",
  initialState: {
    loading: false,
    data: [],
    error: null,
    totalPages: 1,
    searchText: "",
    collection: "",
    page: 0,
  },
  reducers: {
    photoRequest: (state) => {
      state.loading = true;
    },
    photoError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    photoReceived: (state, action) => {
      const { response, total_pages, text, collection } = action.payload;
      state.loading = false;
      state.data = response.data.results;
      state.totalPages = total_pages;
      state.searchText = text;
      state.collection = collection;
    },
    pageProccessRequest: (state) => {
      state.loading = true;
    },
    pageDecrement: (state) => {
      state.loading = false;
      ++state.page;
    },
    pageIncrement: (state) => {
      state.loading = false;
      --state.page;
    },
  },
});
export default photo.reducer;
export const {
  photoRequest,
  photoError,
  photoReceived,
  pageProccessRequest,
  pageDecrement,
  pageIncrement,
} = photo.actions;

export const getPhotos =
  ({
    searchText,
    collection,
    page,
  }: {
    searchText: string;
    collection: string;
    page?: number;
  }) =>
  async (dispatch: Dispatch, getState: () => { photo: { page: number } }) => {
    try {
      dispatch({ type: photoRequest.type });
      let pageNumber;
      if (page) {
        pageNumber = page;
      } else {
        const { page } = getState().photo;
        pageNumber = page;
      }

      const client_id = "EEp9nPmNJe9ZVENaC2HF9WWhDeJVtngpOYinNs0N1Bk" // we can also store on .env

      const response = await api.get(
        `/search/photos?query=${searchText}&collections=${collection}&page=${pageNumber}&client_id=${client_id}`
      );

      dispatch({
        type: photoReceived.type,
        payload: {
          response: response,
          text: searchText,
          collection: collection,
        },
      });
    } catch (e) {
      dispatch({ type: photoError.type, payload: e });
    }
  };

export const pageProcess = (type: string) => async (dispatch: Dispatch) => {
  dispatch({ type: pageProccessRequest });

  if (type === "decrement") {
    dispatch({ type: pageIncrement });
  } else {
    dispatch({ type: pageDecrement });
  }
};
