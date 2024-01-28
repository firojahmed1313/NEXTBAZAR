import { CartProvider } from '@/context/CartContext'

export const GlobalProvider = (props) => {

    return (
        <CartProvider>{props.children}</CartProvider>
    );
};

