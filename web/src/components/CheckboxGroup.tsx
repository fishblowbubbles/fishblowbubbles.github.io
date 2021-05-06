import React from "react";
import styled from "styled-components";

export interface ICheckboxGroupItem {
  label: string;
  value: string;
}

interface ICheckboxGroupProps {
  items: ICheckboxGroupItem[];
  name: string;
  checkedValues?: string[]
  toggleValue: (value: string) => void
}

const Container = styled.div``;

const Item = styled.div``;

export const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  items,
  name,
  checkedValues = [],
  toggleValue,
}) => (
  <Container>
    {items.map(({ label, value }) => (
      <Item>
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checkedValues.includes(value)}
          onChange={() => toggleValue(value)}
        />
        <label htmlFor={value}>{label}</label>
      </Item>
    ))}
  </Container>
);
