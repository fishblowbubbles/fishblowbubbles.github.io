import React from 'react';

import { IRadioGroupRenderProps } from '../containers';

export const Radios: React.FC<IRadioGroupRenderProps> = ({ options, name, selected, selectValue }) => (
  <div>
    {options.map(({ label, value }) => (
      <div key={value}>
        <input
          type="radio"
          name={name}
          value={value}
          checked={value === selected}
          onChange={() => selectValue(value)}
        />
        <label htmlFor={value} onClick={() => selectValue(value)}>
          {label}
        </label>
      </div>
    ))}
  </div>
);
