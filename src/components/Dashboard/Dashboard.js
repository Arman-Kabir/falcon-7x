import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    console.log(data);

    return (
        <div>
            <h1 className='text-4xl font-bold text-blue-400 my-10'>It's The Overall Overview of our product</h1>

            <div className='grid grid-cols-2 gap-6'>
                {/* Line Chart */}
                <div className='line-chart'>
                    <h2 className='text-xl text-blue-400'>Month Wise Sell</h2>
                    <LineChart width={400} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis dataKey={'sell'}></YAxis>
                        <Line type={'monotone'} dataKey={'sell'} stroke="#8884d8"></Line>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                    </LineChart>
                </div>
                {/*Area Chart  */}
                <div className='area-chart'>
                    <h2 className='text-xl text-blue-400'>Investment vs Revenue</h2>
                    <AreaChart width={400} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis dataKey={'investment'}></YAxis>
                        {/* <YAxis dataKey={'revenue'}></YAxis> */}
                        <Area type={'monotone'} dataKey={'investment'} stroke={'green'} fill={'green'}></Area>
                        <Area type={'monotone'} dataKey={'revenue'} stroke="purple" fill={'purple'}></Area>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                    </AreaChart>
                </div>

            </div>



        </div>
    );
};

export default Dashboard;