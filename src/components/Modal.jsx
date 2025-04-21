import React, { createContext, useContext, useState } from "react";
import { cloneElement } from "react";
import { createPortal } from "react-dom";
import useOutsideClick from "../hooks/useOutsideClick";
import { useCrowdfund } from "../contexts/MainContext";

const ModalContext = createContext();
function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const { name: openingName, dispatch } = useCrowdfund();

  console.log(openingName);

  const close = () => {
    setOpenName(""), dispatch({ type: "clearName" });
  };
  const open = (d) => {
    setOpenName(d), dispatch({ type: "closeSidebar" });
  };
  return (
    <ModalContext.Provider
      value={{ open, close, openName, openingName, setOpenName }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: OpenWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => {
      open(OpenWindowName);
    },
  });
}

function Window({ children, name }) {
  const { close, openName, openingName } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName && name !== openingName) return null;

  return createPortal(
    <main className="fixed inset-0 w-[80%] justify-center   m-auto z-50 flex items-center h-[100vh]  ">
      <section
        ref={ref}
        className="relative top-[10%] flex items-center m-auto justify-center  rounded-md px-[2rem] py-[2rem]   bg-white shadow-2xl "
      >
        <div>{cloneElement(children, { onClick: close })}</div>
      </section>
    </main>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
