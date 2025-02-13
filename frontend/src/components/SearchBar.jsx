import React from 'react';
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
import { assets } from '../assets/assets';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

    return showSearch ? (
        <div className="fixed top-[4rem] left-0 w-full flex justify-center items-center py-2px-6 z-40 bg-white border-b border-gray-300 shadow-md">
            {/* Search Box */}
            <div className="flex items-center w-full max-w-lg bg-gray-100 rounded-full px-5 py-2 border border-gray-300">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-transparent outline-none text-base text-gray-700 placeholder-gray-500"
                    type="text"
                    placeholder="Search for products..."
                />
                <img className="w-5 cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-200" src={assets.search_icon} alt="Search" />
            </div>

            {/* Close Icon */}
            <img 
                onClick={() => setShowSearch(false)} 
                className="w-3 ml-4 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-200" 
                src={assets.cross_icon} 
                alt="Close"
            />
        </div>
    ) : null;
};

export default SearchBar;
