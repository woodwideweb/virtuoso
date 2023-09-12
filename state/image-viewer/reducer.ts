import { StaticImageData } from 'next/image';

export type Action =
  | { type: `setImageViewerImage`; payload: StaticImageData }
  | { type: `toggleImageViewerOpen`; payload: boolean };

export type State = {
  imageViewerImage: StaticImageData | null;
  imageViewerOpen: boolean;
};

export const initialState: State = {
  imageViewerImage: null,
  imageViewerOpen: false,
};

export const reducer = (state: State, action: Action): State => {
  console.log(action);
  console.log(`state`, state);
  switch (action.type) {
    case `setImageViewerImage`:
      return { ...state, imageViewerImage: action.payload };
    case `toggleImageViewerOpen`:
      return { ...state, imageViewerOpen: action.payload };
    default:
      return state;
  }
};
