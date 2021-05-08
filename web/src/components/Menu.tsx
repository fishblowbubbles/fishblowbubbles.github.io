import React from "react";
import styled from "styled-components";

import { useToggle } from "hooks";
import { AccordionContainer, IAccordionItem } from "components";

interface IMenuProps {
  items: IAccordionItem[];
}

const Wrapper = styled.div`
  width: 200px;
  height: 100vh;
`

const ToggleButton = styled.button`
  position: absolute;
  z-index: 10;
  left: 0;
`;

const SlideOutPanel = styled.div`
  height: 100%;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  background-color: black;

  a {
    color: white;
    text-decoration: none;
  }
`;

export const Menu: React.FC<IMenuProps> = ({ items }) => {
  const { isActive: isOpen, toggle } = useToggle(false);

  return (
    <Wrapper>
      <ToggleButton onClick={() => toggle()}>Menu Toggle</ToggleButton>
      {isOpen && (
        <SlideOutPanel>
          <AccordionContainer items={items} />
        </SlideOutPanel>
      )}
    </Wrapper>
  );
};
