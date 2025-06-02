import React, { useEffect, useState } from 'react';

// Use the Codespace Django REST API endpoint suffix for activities
const API_URL = 'https://potential-doodle-66r5rjj5pxqfrrpq-8000.app.github.dev/api/activities/';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Activities</h2>
      <ul className="list-group">
        {activities.map(activity => (
          <li className="list-group-item" key={activity.id || activity._id}>
            {activity.type} - {activity.duration} min
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;