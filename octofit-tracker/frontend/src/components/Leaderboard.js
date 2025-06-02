import React, { useEffect, useState } from 'react';

const API_URL = 'https://potential-doodle-66r5rjj5pxqfrrpq-8000.app.github.dev/api/leaderboard/';

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setLeaders(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-header bg-warning text-dark">
        <h2 className="h4 mb-0">Leaderboard</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader, idx) => (
              <tr key={leader.id || leader._id}>
                <td>{idx + 1}</td>
                <td>{leader.team ? leader.team : leader.name}</td>
                <td>{leader.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
