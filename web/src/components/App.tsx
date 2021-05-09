import { Menu as MenuIcon } from "grommet-icons";
import React from "react";
import { Route, Switch, useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";

import { Button } from "./Button";
import { Menu } from "./Menu";
import { Placeholder } from "../pages";
import { useToggle } from "../hooks";

const LINKS = [
  { to: "/", label: "home" },
  { to: "/portfolio", label: "portfolio" },
  { to: "/blog", label: "blog" },
];

const MenuToggleButton = styled(Button)`
  position: fixed;
  top: 0;
  right: 0;
`;

const App: React.FC = () => {
  const { push } = useHistory();
  const { isActive: isMenuOpen, toggle: toggleMenu } = useToggle(false);

  const handleLinkClick = (to: string) => {
    toggleMenu();
    push(to);
  };

  return (
    <div className="App">
      <MenuToggleButton onClick={() => toggleMenu()}>
        <MenuIcon />
      </MenuToggleButton>
      <Menu
        items={LINKS.map(({ to, label }) => ({
          Component: <h2 onClick={() => handleLinkClick(to)}>{label}</h2>,
        }))}
        isOpen={isMenuOpen}
        toggle={toggleMenu}
      />
      <Switch>
        <Route path="/portfolio">
          <Placeholder />
        </Route>
        <Route path="/blog">
          <Placeholder />
        </Route>
        <Route path="/">
          <Placeholder />
        </Route>
      </Switch>
    </div>
  );
};

export const AppWithRouter = withRouter(App);
