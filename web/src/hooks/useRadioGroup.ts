import { IRadioGroupItem } from "components";
import { maxOneReducer, minOneReducer, useToggleGroup } from "hooks/useToggleGroup";

import { combineReducers } from "./helpers";

type IUseRadioGroup = [selected: string, selectValue: (value: string) => void]

export const useRadioGroup = (items: IRadioGroupItem[]): IUseRadioGroup => {
  const [state, toggleIndex] = useToggleGroup(
    items.length,
    combineReducers(minOneReducer, maxOneReducer),
    [0]
  );

  const selected = items[state.indexOf(true)].value;

  const selectValue = (value: string) => {
    const i = items.findIndex((item) => item.value === value);
    toggleIndex(i);
  }

  return [selected, selectValue];
};
