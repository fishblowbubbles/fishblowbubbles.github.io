import { maxOneReducer, minOneReducer, useToggleGroup } from './useToggleGroup';

import { combineReducers } from './helpers';

export const useRadioGroup = (values: string[]): {
  selected: string;
  selectValue: (value: string) => void;
} => {
  const { state, toggleIndex } = useToggleGroup(
    values.length,
    [0],
    combineReducers(minOneReducer, maxOneReducer)
  );

  const selected = values[state.indexOf(true)];

  const selectValue = (value: string) => {
    const i = values.findIndex((v) => v === value);
    toggleIndex(i);
  };

  return { selected, selectValue };
};
