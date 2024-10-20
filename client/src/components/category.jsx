import React, { useEffect } from 'react'

const Category = () => {

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('http://localhost:5000/categories');
            console.log(data);
        }
        fetchData();

    }, [])


    return (
        <>
            <div className="">

            </div>
        </>
    )
}

export default Category
