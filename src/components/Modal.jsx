import React, { createContext, useContext, useState } from "react";
import { cloneElement } from "react";
import { createPortal } from "react-dom";
import useOutsideClick from "../hooks/useOutsideClick";
import { useCrowdfund } from "../contexts/MainContext";

const ModalContext = createContext();
function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  let { name: openingName, dispatch } = useCrowdfund();

  const close = () => {
    setOpenName(""), dispatch({ type: "clearName" });
  };
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ open, close, openName, openingName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: OpenWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => open(OpenWindowName),
  });
}

function Window({ children, name }) {
  const { close, openName, openingName } = useContext(ModalContext);

  const ref = useOutsideClick(close);
  if (name !== openName && name !== openingName) return null;
  return createPortal(
    <main className="fixed inset-0  z-50 flex items-center h-[100vh] ">
      <section
        ref={ref}
        className="fixed top-[20%] left-[38%]  rounded-md px-[2rem] py-[2rem]  bg-white shadow-2xl"
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
