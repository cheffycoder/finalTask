import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const UserPerformance = () => {
    const percentage=90;
    const marks=90;
    return (
        <div className="user-performance">
            <div className="loaders">
                <div className="attendance">
                    Attendance
                    <div style={{ width: 86.62, height: 86.62, left: 56.94, top: 78.25}}>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    </div>
                </div>
                <div className="tests">
                    Test
                    <div style={{ width: 86.62, height: 86.62, left: 56.94, top: 78.25}}>
                        <CircularProgressbar value={marks} text={`${marks}%`} />
                    </div>
                </div>

                <div>
                    HW Rating

                </div>
            </div>
        </div>
    );
};

export default UserPerformance;