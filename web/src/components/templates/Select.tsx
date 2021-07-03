import React from 'react';

import { IRadioGroupRenderProps } from '../containers';

export const Select: React.FC<IRadioGroupRenderProps> = ({
  options,
  name,
  placeholder,
  selected,
  selectValue,
}) => (
  <select name={name} value={selected} onChange={(e) => selectValue(e.target.value)}>
    {placeholder && <option value="" label={placeholder} disabled />}
    {options.map(({ label, value }) => (
      <option key={value} value={value} label={label} />
    ))}
  </select>
);
