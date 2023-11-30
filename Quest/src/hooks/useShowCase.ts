import { useTypedSelector } from "./useTypedSelector";

export const useShowcase = () => {
  const showcase = useTypedSelector((state) => state.showcase);

  return { showcase };
};
