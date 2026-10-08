'use client';

import { useEffect, useState } from "react";

const DateStyle = () => {

    const [date,setDate]=useState("");
    useEffect(()=>{
        const today:string =new Date().toLocaleDateString("bn-BD",{
                dateStyle:"full",
    });

      setDate (today);
        },[])

     
    return (
        <div>
            <p className="text-[#1D271F]">{date}</p>
        </div>
    );
};

export default DateStyle;