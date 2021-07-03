import { Menu as MenuIcon } from 'grommet-icons';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { Button, Menu, useToggle } from './components';
import { Placeholder } from './pages';

import './stylesheets/App.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/blog', label: 'Blog' },
  { to: '/library', label: 'Library' },
  { to: '/portfolio', label: 'Portfolio' },
];

export const App: React.FC = () => {
  const history = useHistory();
  const { isActive: isMenuOpen, toggle: toggleMenu } = useToggle(false);

  const handleLinkClick = (to: string) => {
    history.push(to);
    toggleMenu();
  };

  return (
    <div className="App">
      <div className="navbar">
        <Button icon={<MenuIcon size="small" />} variant="secondary" onClick={() => toggleMenu()} />
      </div>
      <Menu
        items={LINKS.map(({ to, label }) => (
          <Button label={label} variant="secondary" onClick={() => handleLinkClick(to)} />
        ))}
        isOpen={isMenuOpen}
        toggle={toggleMenu}
      />
      <Switch>
        <Route path="/blog">
          <Placeholder />
        </Route>
        <Route path="/library">
          <Placeholder />
        </Route>
        <Route path="/portfolio">
          <Placeholder />
        </Route>
        <Route path="/">
          <Placeholder />
        </Route>
      </Switch>
    </div>
  );
};
