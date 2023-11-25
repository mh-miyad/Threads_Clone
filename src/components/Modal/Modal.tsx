"use client";

import React, { ReactNode, useState } from "react";
import { Dialog } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import { setModal } from "@/Redux/Utils/utilSilcer";
import CreatePost from "../CreatePost/CreatePost";
const Modal = () => {
  const isOpen = useSelector((state: RootState) => state.utils.isOpen);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <Dialog open={isOpen} onClose={() => dispatch(setModal(false))}>
          <div className="fixed inset-0 bg-black/40" aria-hidden="true">
            <div className="fixed inset-0 flex h-full items-center justify-center p-4">
              <Dialog.Panel className="w-full max-w-2xl h-full sm:h-auto rounded bg-white dark:bg-slate-900 shadow-2xl shadow-white/20  text-black dark:text-white p-10 drop-shadow-xl">
                <CreatePost />
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default Modal;
