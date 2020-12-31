import React, {useContext, useState} from 'react';

interface IItemContext {
  itemsCheckout: [];
  setItemsCheckout: any;
}
const testItemsCheckoutContext: IItemContext = {
  itemsCheckout: [],
  setItemsCheckout: null,
};
// TODO: Adicionar tipos corretos á todos os componentes
export const ItemContext = React.createContext(testItemsCheckoutContext);

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

export function useItemContext() {
  const context = useContext(ItemContext);
  const {itemsCheckout, setItemsCheckout} = context;
  return {itemsCheckout, setItemsCheckout};
}
