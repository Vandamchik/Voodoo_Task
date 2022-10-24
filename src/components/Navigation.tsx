import React from 'react';
import { Link } from 'react-router-dom'
import { useShoppingCart } from "../context/ShoppingCartContext";



export default function Navigation() {
    const {cartQuantity} = useShoppingCart()

    return (
        <nav className="h-[100px] flex items-center sticky top-0 justify-between px-5 bg-green-400 text-white mb-10">
            <h1>Voodoo</h1>
            <div className="flex items-start justify-around">
                <Link to="/" className="mr-10">First Task</Link>
                <Link to="/second" className="mr-10">Second Task</Link>
                <Link to="/cart" className="mr-10 relative">
                        Cart
                    <div className="rounded-2xl bg-blue-400 text-yellow-400  w-[30px] h-[30px] absolute flex items-center justify-center left-5">
                        {cartQuantity}
                    </div>
                </Link>
            </div>
        </nav>
    );
};

