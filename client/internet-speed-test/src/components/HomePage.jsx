import React, {useState} from 'react'
import Header from './Header/Header';
import './homePage.css';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';


function HomePage() {
    const [showInformation, setShowInformation] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [data, setData] = useState({});
    const handleStart = async () => {
        setShowLoading(true);
        setShowInformation(false);
        const response = await fetch('http://localhost:5000/getspeedtest');
        const res = await response.json();
        const newResponse = JSON.parse(res.report);
        console.log('api called', res.report);
        console.log(typeof(res.report))
        setData(newResponse)
        setShowLoading(false);
        setShowInformation(true);
    }
  
    return (
    <div className='container'>
        <Header />
        <div className='action_item'>
        <button className='start_button' onClick={handleStart}>Start</button>
        {showInformation && <div className='information'> 
            <div>Download Speed: {data.downloadSpeed}</div>
            <div>Upload Speed: {data?.uploadSpeed}</div>
            <div>Uploaded: {data?.uploaded}</div>
            <div>Latency: {data?.latency}</div>
            <div>Buffer Bloat: {data?.bufferBloat}</div>
            <div>User Location: {data?.userLocation}</div>
            <div>User IP: {data?.userIp}</div>
        </div>}
        {showLoading && <LoadingSpinner />}
        </div>
    </div>
  )
}

export default HomePage