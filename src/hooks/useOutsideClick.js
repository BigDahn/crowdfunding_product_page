import { useEffect, useRef } from "react";

function useOutsideClick(handler, handlerOption = true) {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener("click", handleClick, handlerOption);
    return () => {
      document.removeEventListener("click", handleClick, handlerOption);
    };
  }, [handler, handlerOption]);
  return ref;
}

export default useOutsideClick;
