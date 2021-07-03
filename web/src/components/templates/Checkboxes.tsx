import React from 'react';

import { ICheckGroupRenderProps } from '../containers';

export const Checkboxes: React.FC<ICheckGroupRenderProps> = ({
  options,
  name,
  checked = [],
  toggleValue,
}) => (
  <div>
    {options.map(({ label, value }) => (
      <div key={value}>
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checked.includes(value)}
          onChange={() => toggleValue(value)}
        />
        <label htmlFor={value} onClick={() => toggleValue(value)}>
          {label}
        </label>
      </div>
    ))}
  </div>
);
