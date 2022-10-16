import { useEffect } from "react";

export const useSetTitle = (title: string = "Home") => {
  useEffect(() => {
    document.title = `${title} | Flickity`;
  }, []);
};
