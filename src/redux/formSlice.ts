// src/redux/formSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  formData: Record<string, string>;
}

const initialState: FormState = {
  formData: {},
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Record<string, string>>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { updateFormData } = formSlice.actions;

export const selectFormData = (state: { form: FormState }) =>
  state.form.formData;

export default formSlice.reducer;
