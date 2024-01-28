import { CartProvider } from '@/context/CartContext'

export function GlobalProvider(props){

    return (
        <CartProvider>{props.children}</CartProvider>
    );
};

