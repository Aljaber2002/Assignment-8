import React, { useEffect, useState } from 'react';
import { FaApple } from "react-icons/fa";
import './Study.css'
import Subject from '../Subject/Subject';
import Cart from '../Cart/Cart';

const Study = () => {
    const [study, setStudy] = useState([])
    console.log(study)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setStudy(data))
    }, [])
    const [cart, setCart] = useState([])
    console.log(cart)
    const handleCart = (obj) => {
        const newArray = [...cart, obj]
        setCart(newArray)

    }
    return (
        <div className='study-container'>
            <div className='books-container'>
                <div className='flex mt-8 align-center ml-[100px]'>
                    <span className='text-5xl mr-3 text-green-600'>{<FaApple></FaApple>}</span>
                    <h1 className='text-5xl '>Study Schedule</h1>
                </div>
                <h1 className=' mt-5 ml-[100px] text-3xl mb-5 text-green-600'>Study routine for a day</h1>
                <div className='books ml-[100px]'>
                    {
                        study.map(sub => <Subject func={handleCart} study={sub}></Subject>)
                    }


                </div>
            </div>
            <div>

                <Cart addedCart={cart}></Cart>
            </div>
        </div>
    );
};

export default Study;