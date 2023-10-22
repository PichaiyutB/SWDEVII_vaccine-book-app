import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type BookState = {
  bookItems: BookingItem | null;
};

const initialState: BookState = { bookItems: null };
export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<BookingItem>) => {
      state.bookItems = action.payload;
    },
    removeReservation: (state, action: PayloadAction<BookingItem>) => {
      state.bookItems = null;
    },
  },
});

export const { addReservation, removeReservation } = bookSlice.actions;
export default bookSlice.reducer;
