import React, { useState, useEffect } from 'react';

const CompletedQuests = () => {
  const [completedQuests, setCompletedQuests] = useState([]);

  useEffect(() => {
    // Fetch data from localhost:3001/api/quests
    fetch('http://localhost:3001/api/quests')
      .then((response) => response.json())
      .then((data) => {
        // Extract and filter quests with marker 0
        setCompletedQuests(data.data.filter((quest) => quest.marker === 0));
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="mt-10 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {completedQuests.map((quest) => (
        <div key={quest.id} className="bg-white p-4 shadow-md rounded-lg">
          <img src={quest.image} alt="Quest" className="w-full h-auto" />
          <p className="text-lg font-semibold mt-2">{quest.location}</p>
          <p className="mt-2">{quest.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CompletedQuests;
