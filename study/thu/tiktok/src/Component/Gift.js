import React, { useState } from 'react';


const gitfs = [
    "CPU i9",
    "RAM 2BG RBG",
    "RBG keyboard"
]

const Gift = () => {
    const [gift, setGift] = useState();

    const handleGift = () => {

        setGift(gitfs[Math.floor(Math.random() * gitfs.length)]);
    }
    return (
        <div>
            <h1>{gift || "Chua co phan thuong"}</h1>


            <button onClick={handleGift}>Lay thuong</button>
        </div>
    );
}

export default Gift;
