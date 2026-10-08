'use client';

const DateStyle = () => {

     const date=new Date().toLocaleDateString("bn-BD",{
                dateStyle:"full",
    })
    return (
        <div>
            <p className="text-[#1D271F]">{date}</p>
        </div>
    );
};

export default DateStyle;