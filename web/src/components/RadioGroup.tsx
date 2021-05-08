import React from "react";

import { useRadioGroup } from "hooks";

export interface IRadioGroupItem {
  label: string;
  value: string;
}

interface IRadioGroupContentProps {
  items: IRadioGroupItem[];
  name: string;
  selectedValue: string;
  selectValue: (value: string) => void;
}

export const RadioGroupContent: React.FC<IRadioGroupContentProps> = ({
  items,
  name,
  selectedValue,
  selectValue,
}) => (
  <div>
    {items.map(({ label, value }) => (
      <div>
        <label htmlFor={value}>{label}</label>
        <input
          type="radio"
          name={name}
          value={value}
          checked={value === selectedValue}
          onChange={() => selectValue(value)}
        />
      </div>
    ))}
  </div>
);

interface IRadioGroupProps {
  items: IRadioGroupItem[];
  name: string;
}

export const RadioGroup: React.FC<IRadioGroupProps> = ({ items, name }) => (
  <RadioGroupContent items={items} name={name} {...useRadioGroup(items)} />
);
