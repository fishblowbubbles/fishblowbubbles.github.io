import React from "react";
import styled from "styled-components";

export interface IRadioGroupItem {
  label: string;
  value: string;
}

interface IRadioGroupProps {
  items: IRadioGroupItem[];
  name: string;
  selectedValue: string;
  selectValue: (value: string) => void;
}

const Container = styled.div``;

const Item = styled.div``;

export const RadioGroup: React.FC<IRadioGroupProps> = ({
  items,
  name,
  selectedValue,
  selectValue,
}) => (
  <Container>
    {items.map(({ label, value }) => (
      <Item>
        <label htmlFor={value}>{label}</label>
        <input
          type="radio"
          name={name}
          value={value}
          checked={value === selectedValue}
          onChange={() => selectValue(value)}
        />
      </Item>
    ))}
  </Container>
);
