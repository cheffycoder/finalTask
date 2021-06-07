import React from 'react';
import '../Container/DashBoard.css'
import Edit from '../Assets/Edit.png'
import addstudent from '../Assets/AddStudent.png'
import profileImage from '../Assets/ProfileImage.png'

const UserDetails = () => {
    return (
        <div className = "user-info">
            <span className="batchname">
                <h5>Batch Name|PHY_B1</h5>
                <img src={Edit} width='21' height='19' alt="Edit batch"></img>
            </span>
            <span className="username">
                <div className="bindingImage">
                    <img src={profileImage} width='28' height='28' alt="UserImage" style={{marginLeft:'41', padding:"4px"}}/>
                    Marvin McKinney
                </div>
                <img id="addStudentImage" src={addstudent} width='33.5' height='18' alt="Add user"></img>
            </span>
            <span className="studentCount">
                    <i class="fas fa-user-circle" style={{marginLeft:'41', padding:"4px"}} ></i>
                125 Students
            </span>
            <div className="upcoming-activity">
                <div className="bindingImage">
                    <i class="fas fa-clock" style={{width:'28', height:'28', marginLeft:'41', padding:"4px"}}></i>
                    Upcoming &lt;Activity&gt;<br/>
                    Thu, 25th May <br/>
                    12:00 PM - 12:00 PM
                </div>
                <button className="view-button">View</button>
            </div>

           
        </div>
    );
};

export default UserDetails;