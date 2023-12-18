import { MutableRefObject, useEffect } from "react";

export const useClickOutside = (ref: MutableRefObject<any>, callback: () => void) => {
  // @ts-ignore
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
};
