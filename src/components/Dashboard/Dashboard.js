import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';


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

            <div className='grid md:grid-cols-2 gap-10'>
                {/* Line Chart */}
                <div className='line-chart flex flex-col items-center'>
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
                <div className='area-chart flex flex-col items-center'>
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
                {/* Bar Chart */}
                <div className='bar-chart flex flex-col items-center'>
                    <h2 className='text-xl text-blue-400'>Investment vs Revenue</h2>
                    <BarChart width={400} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                        <Bar dataKey={'investment'} fill={'green'}></Bar>
                        <Bar dataKey={'revenue'} fill={'blue'}></Bar>
                    </BarChart>
                </div>
                {/* Pie Chart */}
                <div className='pie-chart  flex flex-col items-center'>
                    <h2 className='text-xl text-blue-400'>Investment vs Revenue</h2>
                    <PieChart width={400} height={300} data={data}>
                        {/* <Pie dataKey={'investment'}></Pie>
                        <Pie dataKey={'revenue'}></Pie> */}
                        <Pie data={data} dataKey="investment" nameKey="investment" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                        <Pie data={data} dataKey="revenue" nameKey="revenue" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />

                    </PieChart>

                </div>

            </div>



        </div>
    );
};

export default Dashboard;