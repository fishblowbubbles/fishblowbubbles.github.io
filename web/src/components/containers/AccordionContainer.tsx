import React from "react";

import { useToggleGroup } from "../hooks";

export interface IAccordionItem {
  Component: JSX.Element;
  content?: JSX.Element;
}

export type IAccordionRenderProps = {
  items: IAccordionItem[];
  state: boolean[];
  toggleIndex: (index: number) => void;
};

export const AccordionContainer: React.FC<{
  items: IAccordionItem[];
  render: (props: IAccordionRenderProps) => JSX.Element;
}> = ({ items, render }) => render({ items, ...useToggleGroup(items.length) });
