import { useToggleGroup } from './useToggleGroup';

type IUseCheckGroup = {
  checked: string[];
  toggleValue: (value: string) => void;
  setAll: (isChecked: boolean) => void;
};

export const useCheckGroup = (values: string[]): IUseCheckGroup => {
  const { state, toggleIndex, setAll } = useToggleGroup(values.length);

  let checked: string[] = [];

  values.forEach((v, i) => {
    if (state[i]) {
      checked.push(v);
    }
  });

  const toggleValue = (value: string) => {
    const i = values.findIndex((v) => v === value);
    toggleIndex(i);
  };

  return { checked, toggleValue, setAll };
};
