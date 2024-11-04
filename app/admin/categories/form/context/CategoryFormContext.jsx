import { createContext, useContext } from "react";

const CategoryFormContext = createContext();

export default function CategoryFormContextProvider({ children }) {
  return (
    <CategoryFormContext.Provider>{children}</CategoryFormContext.Provider>
  );
}

export const useCategoryForm = () => useContext(CategoryFormContext);
