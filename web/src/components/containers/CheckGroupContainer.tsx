import React from "react";

import { useCheckGroup } from "../hooks";

export interface ICheckOption {
  label: string;
  value: string;
}

export interface ICheckGroupRenderProps {
  options: ICheckOption[];
  name: string;
  checked?: string[];
  toggleValue: (value: string) => void;
}

export const CheckGroupContainer: React.FC<{
  options: ICheckOption[];
  name: string;
  render: (props: ICheckGroupRenderProps) => JSX.Element;
}> = ({ options, name, render }) =>
  render({
    options,
    name,
    ...useCheckGroup(options.map(({ value }) => value)),
  });
