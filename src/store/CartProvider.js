import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (prevState, action) => {
    if (action.type === 'ADD') {
        const updatedItems = prevState.items.concat(action.item);
        const updatedTotalAmount = prevState.totalAmount + action.item.price * action.item.amount;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    return defaultCartState;
};

const CartProvider = (props) => {
    const additemCartHandler = (item) => {
        dispatchCartAction({
            type: 'ADD',
            item: item,
        });
    };
    const removeitemCartHandler = (id) => {
        dispatchCartAction({
            type: 'REMOVE',
            id: id,
        });
    };

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: additemCartHandler,
        removeItem: removeitemCartHandler,
    };

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};
export default CartProvider;
