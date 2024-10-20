import React from 'react'

const Bestplace = () => {

    const places = ["Best Restaurants in Bangalore", " South Indian Restaurant Near Me", "Indian Restaurant Near Me ", " Indian Restaurant Near Me", "Indian Restaurant Near Me", "Indian Restaurant Near Me", "Indian Restaurant Near Me", "Indian Restaurant Near Me", " South Indian Restaurant Near Me", "Indian Restaurant Near Me ", " Indian Restaurant Near Me", "Indian Restaurant Near Me", "Indian Restaurant Near Me", "Indian Restaurant Near Me", "Indian Restaurant Near Me"]



    return (
        <div className="max-w-[1200px] mx-auto  items-center justify-between">
            <div className="flex flex-col gap-8 w-full my-16  justify-between">
                <div className="font-bold text-[25px] ">
                    Best Places to Eat Across Cities
                </div>
                <div className="flex flex-wrap gap-4">
                    {
                        places.map((item, index) => (
                            <div className="border-2 p-4 rounded-lg" key={index}>
                                <p className="">{item}</p>
                            </div>
                        ))
                    }


                    {/* <div className="border-2 p-4 rounded-lg">
                        <p className="">Best Restaurants in Bangalore</p>
                    </div> */}

                </div>
            </div>

        </div>
    )
}

export default Bestplace
