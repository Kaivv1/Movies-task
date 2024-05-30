import { useEffect, useRef } from "react";

type CloseFn = () => void;

export const useClickOutside = <T extends HTMLElement>(closeFn: CloseFn) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as T)) {
        closeFn();
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [closeFn, ref]);

  return ref;
};
