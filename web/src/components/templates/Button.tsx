import React from 'react';

import '../../stylesheets/Button.css';

interface IButtonProps {
  icon?: JSX.Element;
  label?: string;
  variant?: string;
  onClick: (e: React.MouseEvent) => void;
}

export const Button: React.FC<IButtonProps> = ({ icon, label, variant = 'primary', onClick }) => (
  <button className={`button--${variant}`} onClick={onClick}>
    {icon && <div className="button__icon">{icon}</div>}
    {label && (
      <div className="button__label">
        {label}
      </div>
    )}
  </button>
);
