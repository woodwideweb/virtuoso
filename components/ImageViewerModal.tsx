"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { IconX } from "@tabler/icons-react";
import { useImageViewerState } from "@/state/image-viewer/hooks";

const ImageViewerModal: React.FC = () => {
  const { state, dispatch } = useImageViewerState();

  return (
    <Transition.Root show={state.imageViewerOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() =>
          dispatch({ type: `toggleImageViewerOpen`, payload: false })
        }
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0 w-screen h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-8 scale-90"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-8 scale-90"
            >
              <Dialog.Panel className="rounded-[40px] relative flex flex-col-reverse md:flex-row border border-amber-50 mx-20 w-screen max-w-7xl h-3/4 overflow-hidden">
                <div className="flex-grow">
                  <Image
                    src={state.imageViewerImage ?? ``}
                    alt="foo"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="bg-amber-50 p-4 shrink-0 flex flex-col justify-between">
                  <button
                    onClick={() =>
                      dispatch({
                        type: `toggleImageViewerOpen`,
                        payload: false,
                      })
                    }
                    className="w-12 h-12 hover:bg-amber-100 rounded-full flex justify-center items-center transiton-[color,background-color,transform] active:scale-90 active:bg-amber-200/70 duration-200"
                  >
                    <IconX className="text-black/50" />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ImageViewerModal;
