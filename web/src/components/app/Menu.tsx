import { Close as CloseIcon } from 'grommet-icons';
import React from 'react';

import { Button } from '../templates';

import '../../stylesheets/Menu.css';

export const Menu: React.FC<{
  items: JSX.Element[];
  isOpen: boolean;
  toggle: () => void;
}> = ({ items, isOpen, toggle }) => {
  const classNames = ['menu'];

  if (!isOpen) {
    classNames.push('menu--hide');
  }

  return (
    <div className={classNames.join(' ')}>
      <div className="menu__close">
        <Button icon={<CloseIcon size="small" />} onClick={() => toggle()} />
      </div>
      <div>
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </div>
  );
};
