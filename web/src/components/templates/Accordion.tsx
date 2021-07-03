import React from "react";

import { IAccordionRenderProps } from "../containers";
import { Button } from "./Button";

export const Accordion: React.FC<IAccordionRenderProps> = ({
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
