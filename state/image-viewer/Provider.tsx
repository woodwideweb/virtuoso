import { createContext, useReducer } from "react";
import type { Action, State } from "./reducer";
import { reducer, initialState } from "./reducer";

export const ImageViewerStateContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => console.log(`Provider not found`) }); // eslint-disable-line no-console

const ImageViewerStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = { state, dispatch };
  return (
    <ImageViewerStateContext.Provider value={contextValue}>
      {children}
    </ImageViewerStateContext.Provider>
  );
};

export default ImageViewerStateProvider;
