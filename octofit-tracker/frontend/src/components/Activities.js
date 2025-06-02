import React, { useEffect, useState } from 'react';

const API_URL = 'https://potential-doodle-66r5rjj5pxqfrrpq-8000.app.github.dev/api/activity/';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-header bg-info text-white">
        <h2 className="h4 mb-0">Activities</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Type</th>
              <th>Duration (min)</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(activity => (
              <tr key={activity.id || activity._id}>
                <td>{activity.activity_type}</td>
                <td>{activity.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Activities;
