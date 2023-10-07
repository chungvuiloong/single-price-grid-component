import React from 'react';

const MonthlySubscription = () => {
    return (
        <div className='basis-1/2 flex flex-col gap-3 bg-Cyan lg:p-10 p-7 text-white'>
            <h2 className='text-lg'>Monthly Subscription</h2>
            <div className='flex flex-col gap-1'>
                <div className='flex flex-row gap-4'>
                    <div className='text-3xl font-bold'>&#x24;29</div> 
                    <div className='self-center text-Light-Gray opacity-80'>per month</div>
                </div>
                <div>Full access for less than &#x24;1 a day</div>
            </div>
            <button className="mt-4 p-3.5 bg-Bright-Yellow border-none text-white rounded-md ">Sign Up</button>
        </div>
    );
};

export default MonthlySubscription;