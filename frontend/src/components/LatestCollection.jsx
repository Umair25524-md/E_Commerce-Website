import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { motion } from 'framer-motion';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]);

    const text = "LATEST COLLECTIONS";
    
    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <motion.div className="flex justify-center flex-wrap">
                    {text.split(" ").map((word, wordIndex) => (
                        <span key={wordIndex} className="mr-2 flex">
                            {word.split("" ).map((letter, index) => (
                                <motion.span 
                                    key={index} 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="inline-block"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </span>
                    ))}
                </motion.div>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-xl text-gray-600 no-underline'>
                    Discover the freshest trends with our latest collection – where style meets elegance! ✨
                </p>
            </div>
            {/* Rendering product */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;
