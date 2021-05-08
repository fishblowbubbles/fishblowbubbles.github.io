import { IRadioGroupItem } from "components";
import {
  maxOneReducer,
  minOneReducer,
  useToggleGroup,
} from "hooks";

import { combineReducers } from "./helpers";

type IUseRadioGroup = {
  selectedValue: string;
  selectValue: (value: string) => void;
};

export const useRadioGroup = (items: IRadioGroupItem[]): IUseRadioGroup => {
  const { state, toggleIndex } = useToggleGroup(
    items.length,
    [0],
    combineReducers(minOneReducer, maxOneReducer)
  );

  const selectedValue = items[state.indexOf(true)].value;

  const selectValue = (value: string) => {
    const i = items.findIndex((item) => item.value === value);
    toggleIndex(i);
  };

  return { selectedValue, selectValue };
};
