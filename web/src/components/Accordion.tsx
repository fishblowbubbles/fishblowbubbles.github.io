import { useToggleGroup } from "hooks";
import React from "react";

export interface IAccordionItem {
  toggle: JSX.Element;
  content?: JSX.Element;
  disabled?: boolean;
}

interface IAccordionProps {
  items: IAccordionItem[];
  state: boolean[];
  toggleIndex: (index: number) => void;
}

export const Accordion: React.FC<IAccordionProps> = ({
  items,
  state,
  toggleIndex,
}) => (
  <div>
    {items.map((item, i) => (
      <div key={i}>
        <button onClick={() => toggleIndex(i)} disabled={item.disabled}>
          {item.toggle}
        </button>
        {state[i] && item.content}
      </div>
    ))}
  </div>
);

interface IAccordionContainerProps {
  items: IAccordionItem[];
}

export const AccordionContainer: React.FC<IAccordionContainerProps> = ({
  items,
}) => <Accordion items={items} {...useToggleGroup(items.length)} />;
