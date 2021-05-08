import { ICheckboxGroupItem } from "components";
import { useToggleGroup } from "hooks";

type IUseCheckboxGroup = {
  checkedValues: string[];
  toggleValue: (value: string) => void;
  setAll: (isChecked: boolean) => void;
};

export const useCheckboxGroup = (
  items: ICheckboxGroupItem[]
): IUseCheckboxGroup => {
  const { state, toggleIndex, setAll } = useToggleGroup(items.length);

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

  return { checkedValues, toggleValue, setAll };
};
