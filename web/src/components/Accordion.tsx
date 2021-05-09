import React from "react";

import { Button } from "../components";
import { useToggleGroup } from "../hooks";

export interface IAccordionItem {
  Component: JSX.Element;
  content?: JSX.Element;
}

type IAccordionContentProps = {
  items: IAccordionItem[];
  state: boolean[];
  toggleIndex: (index: number) => void;
}

export const AccordionContent: React.FC<IAccordionContentProps> = ({
  items,
  state,
  toggleIndex,
}) => (
  <div>
    {items.map(({ Component, content }, i) => (
      <div key={i}>
        <Button onClick={() => toggleIndex(i)}>{Component}</Button>
        {state[i] && content}
      </div>
    ))}
  </div>
);

interface IAccordionProps {
  items: IAccordionItem[];
  render: (props: IAccordionContentProps) => JSX.Element;
}

export const Accordion: React.FC<IAccordionProps> = ({ items, render }) =>
  render({ items, ...useToggleGroup(items.length) });
