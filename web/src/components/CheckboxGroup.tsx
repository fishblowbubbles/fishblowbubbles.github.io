import React from "react";

import { useCheckboxGroup } from "hooks";

export interface ICheckboxGroupItem {
  label: string;
  value: string;
}

interface ICheckboxGroupContentProps {
  items: ICheckboxGroupItem[];
  name: string;
  checkedValues?: string[];
  toggleValue: (value: string) => void;
}

export const CheckboxGroupContent: React.FC<ICheckboxGroupContentProps> = ({
  items,
  name,
  checkedValues = [],
  toggleValue,
}) => (
  <div>
    {items.map(({ label, value }) => (
      <div>
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checkedValues.includes(value)}
          onChange={() => toggleValue(value)}
        />
        <label htmlFor={value}>{label}</label>
      </div>
    ))}
  </div>
);

interface ICheckboxGroupProps {
  items: ICheckboxGroupItem[];
  name: string;
}

export const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  items,
  name,
}) => (
  <CheckboxGroupContent
    items={items}
    name={name}
    {...useCheckboxGroup(items)}
  />
);
