import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import employeeReducer from './employee';

export const store = configureStore({
    reducer: {
        employee: employeeReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
