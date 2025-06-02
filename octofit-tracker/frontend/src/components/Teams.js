import React, { useEffect, useState } from 'react';

const API_URL = 'https://potential-doodle-66r5rjj5pxqfrrpq-8000.app.github.dev/api/teams/';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTeams(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-header bg-success text-white">
        <h2 className="h4 mb-0">Teams</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team.id || team._id}>
                <td>{team.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;
