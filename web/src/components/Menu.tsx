import { Close as CloseIcon } from "grommet-icons";
import React from "react";
import styled from "styled-components";

import { Accordion, AccordionContent, IAccordionItem } from "./Accordion";
import { Button } from "./Button";

interface IMenuProps {
  items: IAccordionItem[];
  isOpen: boolean;
  toggle: () => void;
}

const MenuToggleButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`;

const SlideOutPanel = styled.div<{ isOpen: boolean }>`
  background: white;

  position: fixed;
  top: 0;
  right: 0;

  width: 300px;
  height: 100vh;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  transition: transform 0.2s ease-in-out;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100vw)"};
`;

export const Menu: React.FC<IMenuProps> = ({ items, isOpen, toggle }) => (
  <SlideOutPanel isOpen={isOpen}>
    <MenuToggleButton onClick={() => toggle()}>
      <CloseIcon />
    </MenuToggleButton>
    <Accordion
      items={items}
      render={(props) => <AccordionContent {...props} />}
    />
  </SlideOutPanel>
);
