import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../image/20210214_102404.jpg'

import './Cart.css'


const Cart = (props) => {
    const { addedCart } = props;
    let time = 0;
    for (const singleCart of addedCart) {

        time = time + singleCart.Time

    }
    // Breaktime function

    const handleBreakTime = (s) => {
        const time = document.getElementById(s)
        const specipicTime = time.innerText
        // console.log(specipicTime)
        document.getElementById('break').innerText = specipicTime

    }
    const showToastMessage = () => {
        toast.success('Congratulations.Your task is done!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };
    return (
        <div className='ml-[70px] sticky top-0'>


            <div className='flex mb-7 mt-4'>
                <img src={img} className='profile' alt="" />
                <div className='ml-5'>
                    <h1>Al Jaber</h1>
                    <div>   <span>Dhaka,Bangladesh</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-around bg-slate-200 w-[80%] p-[20px] rounded-lg mb-7'>
                <div>
                    <h1>75kg</h1>
                    <p>weight</p>
                </div>
                <div>
                    <h1>5.7</h1>
                    <p>Height</p>
                </div>
                <div>
                    <h1>21</h1>
                    <p>Yrs</p>
                </div>
            </div>
            <h1 className='mb-5'>Add a Break</h1>
            <div className='flex justify-around bg-slate-200 w-[80%] p-[20px] rounded-lg mb-11'>
                <div className='h-8 w-8 rounded-[50%] bg-white relative'>
                    <h1 id='special' onClick={() => handleBreakTime('special')} className='ml-1 mt-1 cursor-pointer' >10s</h1>

                </div>
                <div className='h-8 w-8 rounded-[50%] bg-white relative'>
                    <h1 id='special1' className='ml-1 mt-1 cursor-pointer' onClick={() => handleBreakTime('special1')}>20s</h1>

                </div>
                <div className='h-8 w-8 rounded-[50%] bg-white relative'>
                    <h1 id='special2' className='ml-1 mt-1 cursor-pointer' onClick={() => handleBreakTime('special2')}>30s</h1>

                </div>
                <div className='h-8 w-8 rounded-[50%] bg-white relative'>
                    <h1 id='special3' className='ml-1 mt-1 cursor-pointer' onClick={() => handleBreakTime('special3')}>40s</h1>

                </div>
                <div className='h-8 w-8 rounded-[50%] bg-white relative'>
                    <h1 id='special4' className='ml-1 mt-1 cursor-pointer' onClick={() => handleBreakTime('special4')}>50s</h1>

                </div>
            </div>
            <h1 className='mb-3'>Exercise Details</h1>
            <div className='flex justify-around  bg-slate-200 w-[80%] p-[20px] rounded-lg'>
                <h1>Exercise Time</h1>
                <p>{time}min</p>

            </div>
            <div className='flex justify-around  bg-slate-200 w-[80%] p-[20px] rounded-lg mt-4'>
                <h1>Break Time</h1>
                <p id='break'>0s</p>

            </div>
            <div>
                <button onClick={showToastMessage} className="btn btn-wide btn-success text-white hover:bg-[green] mt-11">Activity completed</button>
                <ToastContainer />

            </div>
        </div>
    );
};

export default Cart;