"use client";

import React, { useState } from "react";
import { Modal, Button } from "keep-react";
import { CloudArrowUp } from "phosphor-react";
import { Dialog } from "@headlessui/react";

const CreatePostComp = () => {
  const [showModal, setShowModal] = useState(true);

  const onClickOne = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div>
        <Dialog open={showModal} onClose={() => setShowModal(false)}>
          <div className="fixed inset-0 bg-black/30" aria-hidden="true">
            <div className="fixed inset-0 flex h-full items-center justify-center p-4">
              <Dialog.Panel className="w-full max-w-2xl h-full sm:h-auto rounded bg-white p-10 drop-shadow-xl">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iusto, reprehenderit. Ipsam odit sapiente nulla! Quam nemo,
                  dolorem dolor repellendus illum repellat doloremque et ipsam
                  magni ab soluta. Assumenda, eveniet illum.
                </p>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default CreatePostComp;
