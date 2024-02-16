import React from "react";
import type { Action, State } from "./reducer";
import { ImageViewerStateContext } from "./Provider";

export function useImageViewerState(): {
  state: State;
  dispatch: React.Dispatch<Action>;
} {
  return React.useContext(ImageViewerStateContext);
}
