'use client';

import { useEffect, useState } from "react";

const DateStyle = () => {

   const [date,setDate]=useState("");
        useEffect(()=>{
            const timer = setTimeout(()=>{
                setDate(
                    new Date().toLocaleDateString("bn-BD",{
                    dateStyle:"full",
                 })
              );   
            },0);
             return ()=>clearTimeout(timer);
            },[])
     
    return (
        <div>
            <p className="text-[#1D271F]">{date}</p>
        </div>
    );
};

export default DateStyle;