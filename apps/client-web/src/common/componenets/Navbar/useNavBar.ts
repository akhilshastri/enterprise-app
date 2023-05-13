import { useState } from "react";

export const useNavBar = () => {
  const [filter, setFilter] = useState<string>("");

  return {
    filter,
    setFilter,
  };
};
