import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type INITIAL_STATE = {
  contact: {
    isFormVisible: boolean;
    alert: {
      status: "success" | "error" | "warning" | "info" | undefined;
      message: string;
    };
  };
};

const initialState: INITIAL_STATE = {
  contact: {
    isFormVisible: false,
    alert: {
      status: undefined,
      message: "",
    },
  },
};

export const contactReducer = createSlice({
  name: "contact",
  initialState,
  reducers: {
    toggleForm: (state, action: PayloadAction<boolean>) => {
      state.contact.isFormVisible = action.payload;
    },
    setAlert: (
      state,
      action: PayloadAction<{
        status: "success" | "error" | "warning" | "info" | undefined;
        message: string;
      }>
    ) => {
      state.contact.alert = action.payload;
    },
  },
});

export const { toggleForm, setAlert } = contactReducer.actions;

export const selectFormState = (state: any) => state.contact;
export const selectAlertState = (state: any) => state.contact.contact.alert;

export default contactReducer.reducer;
