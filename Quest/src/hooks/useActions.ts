import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as actions2 } from "../store/market/market.slice";
import { actions } from "../store/showcase/showcase.slice";

const rootActions = {
  ...actions,
  ...actions2,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
