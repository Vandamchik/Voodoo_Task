import React from 'react';
import { Link } from 'react-router-dom'



export default function Navigation() {


    return (
        <nav className="h-[70px] flex items-center justify-between px-5 bg-green-400 text-white mb-10">
            <h3>Voodoo</h3>
            <span>
                <Link to="/" className="mr-2">First Task</Link>
                <Link to="/second">Second Task</Link>
            </span>
        </nav>
    );
};

