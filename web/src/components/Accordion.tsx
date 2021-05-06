import React from "react";

interface IAccordionItem {
  toggle: JSX.Element
  content: JSX.Element
}

interface IAccordionProps {
  items: IAccordionItem[]
  state: boolean[]
  toggleIndex: (index: number) => void
}

export const Accordion: React.FC<IAccordionProps> = ({ items, state, toggleIndex }) => (
  <div>
    {items.map((item, i) => (
      <div key={i}>
        <button onClick={() => toggleIndex(i)}>{item.toggle}</button>
        {state[i] && <div>{item.content}</div>}
      </div>
    ))}
  </div>
);
