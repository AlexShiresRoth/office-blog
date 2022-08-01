import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type INITIAL_STATE = {
  contact: {
    isFormVisible: boolean;
  };
};

const initialState: INITIAL_STATE = {
  contact: {
    isFormVisible: false,
  },
};

export const contactReducer = createSlice({
  name: "contact",
  initialState,
  reducers: {
    toggleForm: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload);
      state.contact.isFormVisible = action.payload;
    },
  },
});

export const { toggleForm } = contactReducer.actions;

export const selectFormState = (state: any) => state.contact;

export default contactReducer.reducer;
