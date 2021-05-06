import { useState } from "react";

type IUseToggle = [isActive: boolean, toggle: () => void];

export const useToggle = (initialState = false): IUseToggle => {
  const [isActive, setIsActive] = useState(initialState);

  const toggle = () => {
    setIsActive(!isActive);
  };

  return [isActive, toggle];
};
