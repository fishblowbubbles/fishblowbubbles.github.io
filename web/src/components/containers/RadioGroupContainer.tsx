import React from 'react';

import { useRadioGroup } from '../hooks';

export interface IRadioOption {
  label: any;
  value: any;
}

export interface IRadioGroupRenderProps {
  options: IRadioOption[];
  name: string;
  placeholder?: string;
  selected: string;
  selectValue: (value: string) => void;
}

export const RadioGroupContainer: React.FC<{
  options: IRadioOption[];
  name: string;
  render: (props: IRadioGroupRenderProps) => JSX.Element;
}> = ({ options, name, render }) =>
  render({
    options,
    name,
    ...useRadioGroup(options.map(({ value }) => value)),
  });
