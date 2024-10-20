import React, { useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Card from './card';

const Topresto = () => {
    useEffect(() => {
        async function fetchData() {
            const data = await fetch('https://swiggy-copy2.vercel.app/top-restaurant-chains');
            const response = await data.json();
            settopreso(response);
        }
        fetchData();
    }, [])

    const [topreso, settopreso] = React.useState([]);
    const [slide, setSlide] = React.useState(0);

    const nextitem = () => {
        console.log(topreso.length)
        if (slide < topreso.length - 4) {
            setSlide(slide + 1);
        } else {
            setSlide(0);
        }
    }

    const previousitem = () => {
        console.log(topreso.length)
        if (slide > 0) {
            setSlide(slide - 1);
        } else {
            setSlide(topreso.length - 4);
        }
    }
    return (
        <>
            <div className="max-w-[1200px] mx-auto  items-center justify-between">
                <div className="flex w-full my-16 items-center justify-between">
                    <div className="font-bold text-[25px] ">
                        Top Restaurants chains in Bhopal
                    </div>
                    <div className="flex gap-4">
                        <div className="h-[30px] w-[30px] cursor-pointer flex items-center justify-center rounded-full  mx-2 bg-black/40 " onClick={previousitem}>
                            <FaArrowLeft />
                        </div>
                        <div className="h-[30px] w-[30px] flex items-center cursor-pointer justify-center rounded-full  mx-2 bg-black/40 " onClick={nextitem}>
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className="flex overflow-x-hidden">
                    <div className="flex gap-6 duration-500  " style={
                        { transform: `translateX(-${slide *10}%)` }
                    }> {
                            topreso.map((category, index) => {
                                return (
                                    <Card {...category} key={index} />
                                )
                            })
                        }
                    </div>
                </div>
                <hr className='my-4 border-[1px]'></hr>
            </div>
        </>
    )
}

export default Topresto
