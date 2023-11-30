import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem } from "../../types/types.dto";

const initialState: IItem[] = [];

export const marketSlice = createSlice({
  name: "market",
  initialState: initialState,
  reducers: {
    addToMarket: (state, { payload: item }: PayloadAction<IItem>) => {
      if (state.some((r) => r.id === item.id)) {
        return state.map((itemInState) =>
          itemInState.id === item.id
            ? { ...itemInState, count: itemInState.count + 1 }
            : itemInState
        );
      }

      return [...state, { ...item, count: 1 }];
    },
    deleteToMarket: (state, { payload: item }: PayloadAction<IItem>) => {
      if (state.some((r) => r.id === item.id)) {
        return (state = state.filter((r) => r.id !== item.id));
      }
    },
  },
});

export const { actions, reducer } = marketSlice;
