import { Dispatch, useReducer } from "react";

import { combineReducers } from "./helpers";

enum ACTION_TYPE {
  TOGGLE_INDEX = "toggle_index",
  SET_ALL = "set_all",
}

type IToggleIndexAction = {
  type: ACTION_TYPE.TOGGLE_INDEX;
  index: number;
};

type ISetAllAction = {
  type: ACTION_TYPE.SET_ALL;
  isActive: boolean;
};

type IToggleGroupAction = IToggleIndexAction | ISetAllAction;

type IToggleGroupReducer = (
  state: boolean[],
  action: IToggleGroupAction
) => boolean[] | undefined;

const defaultReducer: IToggleGroupReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.TOGGLE_INDEX:
      return state.map((isActive, i) => {
        if (i === action.index) {
          return !isActive;
        }

        return isActive;
      });

    case ACTION_TYPE.SET_ALL:
      return state.map(() => action.isActive);

    default:
      return state;
  }
};

export const minOneReducer: IToggleGroupReducer = (state, action) => {
  if (action.type === ACTION_TYPE.TOGGLE_INDEX) {
    if (state[action.index]) {
      const activeCount = state.filter(Boolean).length;

      if (activeCount === 1) {
        return state;
      }
    }
  }
};

export const maxOneReducer: IToggleGroupReducer = (state, action) => {
  if (action.type === ACTION_TYPE.TOGGLE_INDEX) {
    return state.map((_, i) => {
      if (i !== action.index) {
        return false;
      }

      return true;
    });
  }
};

const initialize = ({
  length,
  activeIndices = [],
}: {
  length: number;
  activeIndices: number[];
}): boolean[] => {
  let initialState = [];

  for (let i = 0; i < length; i++) {
    initialState.push(false);
  }

  for (const i of activeIndices) {
    initialState[i] = true;
  }

  return initialState;
};

type IUseToggleGroup = [
  boolean[],
  (index: number) => void,
  (isActive: boolean) => void
];

type IUseToggleGroupReducer = [boolean[], Dispatch<IToggleGroupAction>];

export const useToggleGroup = (
  length: number,
  reducer: IToggleGroupReducer = (state, action) => undefined,
  activeIndices: number[] = []
): IUseToggleGroup => {
  const [state, dispatch]: IUseToggleGroupReducer = useReducer(
    combineReducers(reducer, defaultReducer),
    { length, activeIndices },
    initialize
  );

  const toggleIndex = (index: number) => {
    dispatch({ type: ACTION_TYPE.TOGGLE_INDEX, index });
  };

  const setAll = (isActive: boolean) => {
    dispatch({ type: ACTION_TYPE.SET_ALL, isActive });
  };

  return [state, toggleIndex, setAll];
};
