import { useReducer } from 'react';

import { combineReducers } from './helpers';

enum ACTION_TYPE {
  TOGGLE_INDEX = 'toggle_index',
  SET_ALL = 'set_all',
}

type IToggleGroupAction = {
  type: ACTION_TYPE;
  payload: any;
};

type IToggleGroupReducer = (state: boolean[], action: IToggleGroupAction) => boolean[] | undefined;

const defaultReducer: IToggleGroupReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.TOGGLE_INDEX:
      return state.map((isActive, i) => {
        if (i === action.payload) {
          return !isActive;
        }

        return isActive;
      });

    case ACTION_TYPE.SET_ALL:
      return state.map(() => action.payload);

    default:
      return state;
  }
};

export const minOneReducer: IToggleGroupReducer = (state, action) => {
  if (action.type === ACTION_TYPE.TOGGLE_INDEX) {
    if (state[action.payload]) {
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
      if (i !== action.payload) {
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

export const useToggleGroup = (
  length: number,
  activeIndices: number[] = [],
  reducer: IToggleGroupReducer = () => undefined
): {
  state: boolean[];
  toggleIndex: (index: number) => void;
  setAll: (isActive: boolean) => void;
} => {
  const [state, dispatch] = useReducer(
    combineReducers(reducer, defaultReducer),
    { length, activeIndices },
    initialize
  );

  const toggleIndex = (index: number) => {
    dispatch({ type: ACTION_TYPE.TOGGLE_INDEX, payload: index });
  };

  const setAll = (isActive: boolean) => {
    dispatch({ type: ACTION_TYPE.SET_ALL, payload: isActive });
  };

  return { state, toggleIndex, setAll };
};
