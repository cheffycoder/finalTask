import React from 'react';
import '../Container/DashBoard.css'
import edit from '../Assets/Edit.png'

const UserDetails = () => {
    return (
        <div className = "user-info">
            <div className="batchname">
                Batch Name|PHY_B1
                <img src={edit}></img>
            </div>
            <span className="username">UserName</span>
            <span className="studentCount">125 Students</span>
            <div className="activity">Upcoming activity </div>
        </div>
    );
};

export default UserDetails;