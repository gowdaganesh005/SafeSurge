import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../../assets/Card'; // Assuming Card is in a separate file

function MissingList() {
  const [missingReports, setMissingReports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/missing/getall'); 
        setMissingReports(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
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
  );
}

export default MissingList;
