import { MutableRefObject, useEffect} from "react";

export const useClickOutside = (ref: MutableRefObject<null | HTMLElement>, callback: () => void) => {
  const handleClick: EventListenerOrEventListenerObject = (e) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
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
