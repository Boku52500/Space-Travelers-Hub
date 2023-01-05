import React from 'react';

const Profile = () => {
  return (
    <div className="container d-flex justify-content-center my-5">
      <div>
        <h2>My Missions</h2>
        <div className="card mission-card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">sample 1</li>
            <li className="list-group-item">sample 2</li>
            <li className="list-group-item">sample 3</li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="ms-5">My Rockets</h2>
        <div className="card rocket-cart ms-5">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">sample 1</li>
            <li className="list-group-item">sample 2</li>
            <li className="list-group-item">sample 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
