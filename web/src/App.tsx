import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { IAccordionItem, Menu } from "components";

const MenuItems: IAccordionItem[] = [
  { toggle: <Link to="/">Home</Link>, disabled: true },
  { toggle: <Link to="/portfolio">Portfolio</Link>, disabled: true },
  { toggle: <Link to="/blog">Blog</Link>, disabled: true },
];

const App: React.FC = () => (
  <div className="App">
    <BrowserRouter>
      <Menu items={MenuItems} />
      <Switch>
        <Route path="/portfolio">Portfolio</Route>
        <Route path="/blog">Blog</Route>
        <Route path="/">Home</Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
