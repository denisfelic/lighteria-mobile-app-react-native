import React, {useContext, useState} from 'react';

export const ItemContext = React.createContext({});

const ItemContextProvider: React.FC = ({children}) => {
  const [itemsCheckout, setItemsCheckout] = useState([]);
  return (
    <ItemContext.Provider
      value={{
        itemsCheckout,
        setItemsCheckout,
      }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;

export function useItem() {
  const context = useContext(ItemContext);
  const {itemsCheckout, setItemsCheckout} = context;
  return {itemsCheckout, setItemsCheckout};
}
