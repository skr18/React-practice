import React,{useState} from "react";

const ItemsCountContext = createContext();

const ItemsCountProvider = ({ children }) => {
    const [itemsCount, setItemsCount] = useState(0);
  
    const updateItemsCount = (count) => {
      setItemsCount(count);
    };
  
    return (
      <ItemsCountContext.Provider value={{ itemsCount, updateItemsCount }}>
        {children}
      </ItemsCountContext.Provider>
    );
  };

export default ItemsCountContext;
