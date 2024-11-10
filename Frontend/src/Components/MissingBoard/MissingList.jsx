import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import { Card } from '../../assets/Card'; 


function MissingList() {
  const [missingReports, setMissingReports] = useState([]);
  const scrollContainerRef = useRef(null);
  let scrollInterval = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://52.2.25.130:8000/api/v1/missing/getall'); 
        setMissingReports(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
 
  

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    
    const startAutoScroll = () => {
      let start = scrollContainer.scrollLeft;
      scrollInterval.current = setInterval(() => {
        if (start >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          start = 0;
        } else {
          start += 1;
        }
        scrollContainer.scrollTo({
          left: start,
          behavior: "smooth",
        });
      }, 30);
    };

    
    startAutoScroll();

   
    const pauseAutoScroll = () => {
      clearInterval(scrollInterval.current);
    };

  
    const handleUserScroll = () => {
      pauseAutoScroll();
      
      setTimeout(startAutoScroll, 2000);
    };

    scrollContainer.addEventListener("scroll", handleUserScroll);

    
    return () => {
      clearInterval(scrollInterval.current);
      scrollContainer.removeEventListener("scroll", handleUserScroll);
    };
  }, []);

  return (
    <div className='justify-center items-center'>
      <div className='justify-center'><h1 className='justify-center text-center text-xl '><b>Help us To Find.</b></h1><h1  className='justify-center text-center text-xl'><b> Please Do contact If Found</b></h1></div>
      <div
      ref={scrollContainerRef}
      className='flex overflow-x-auto space-x-4 max-w-full scrollbar-hide'
      >
      {missingReports.map((report) => (
        <Card
          key={report._id}
          name={report.name}
          age={report.age}
          address={report.address}
          img={report.avatar} 
          phoneNumber={report.phoneNumber}
          gender={report.gender}
        />
      ))}
      </div>
    </div>
  );
}

export default MissingList;
