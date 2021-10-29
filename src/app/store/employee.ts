import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';

import { employeeSchema } from '../schemas/employee';

interface stateInterface {
    list: employeeSchema[] | [];
}
const initialState:stateInterface  =  {
    list: [],
};

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        getEmployee: (state, action:PayloadAction<employeeSchema[]>) => {
            state.list =  action.payload
        }
        // add: () => {

        // },
        // edit: () => {

        // },
        // delete: () => {

        // },
    }
});

export const { getEmployee } = employeeSlice.actions;

export const fetchEmployee = (): AppThunk => (dispatch, getState) => {
    const employeeList = [
        {
          code: 'CCI00001',
          name: 'Hilarios Goes',
          isAdmin: false,
        },
        {
          code: 'CCI00002',
          name: 'Atelia Gomes',
          isAdmin: false,
        },
        {
          code: 'CCI00003',
          name: 'Sneha Nagvenkar',
          isAdmin: false,
        },
        {
          code: 'CCI00004',
          name: 'Ashwin Kumar',
          isAdmin: false,
        },
        {
          code: 'CCI00015',
          name: 'Gurudatta patekar',
          isAdmin: true,
          isCurrentUser: true,
        },
      ];
    dispatch(getEmployee(employeeList));
};

export default employeeSlice.reducer;