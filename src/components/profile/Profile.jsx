import React from 'react';
import { useSelector } from 'react-redux';
const Profile = () => {
  const rockets = useSelector(state => state.post);
 const reservedRockets = rockets.filter((rocket) => rocket.canceled);


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
            {reservedRockets.length ? reservedRockets.map((rocketName) => { 
            const {rocket_name, id} = rocketName;
             return (
              <li key={id} className="list-group-item">{rocket_name}</li>
             )
          }) : <p className='p-2 text-danger'>No Reserved Rockets Yet</p>} 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
