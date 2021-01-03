import { createSlice, configureStore } from "@reduxjs/toolkit";

interface CounterState {
        value: number;
}

const initialState: CounterState = { value: 0 };
const counter = createSlice({
        name: "counter",
        initialState,
        reducers: {
                increment: (state) => {
                        state.value++;
                },
        },
});

export const store = configureStore({ reducer: counter.reducer });
export const counterActions = { ...counter.actions };

export const counterSelecter = (state: any) => state;
