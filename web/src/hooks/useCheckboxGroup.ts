import { ICheckboxGroupItem } from "components";
import { useToggleGroup } from "hooks/useToggleGroup";

type IUseCheckboxGroup = [string[], (value: string) => void, (isChecked: boolean) => void];

export const useCheckboxGroup = (items: ICheckboxGroupItem[]): IUseCheckboxGroup => {
  const [state, toggleIndex, setAll] = useToggleGroup(items.length);

  let checkedValues: string[] = [];

  items.forEach(({ value }, i) => {
    if (state[i]) {
      checkedValues.push(value);
    }
  });

  const toggleValue = (value: string) => {
    const i = items.findIndex((item) => item.value === value);
    toggleIndex(i);
  };

  return [checkedValues, toggleValue, setAll];
};