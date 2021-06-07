import React, {useState, useEffect} from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReactStars from "react-rating-stars-component";



const UserPerformance = () => {
    const [percentage, setpercentage] = useState(0)
    const [marks, setmarks] = useState(0)
    useEffect(() => {
        setpercentage(90);
        setmarks(90);
    },[])
    return (
        <div className="user-performance">
            <div className="loaders">
                <div className="attendance">
                    Attendance
                    <div style={{ width: 86.62, height: 86.62, left: 56.94, top: 78.25}}>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                    </div>
                    Last absence <br/>
                    12th May, 12:00 PM
                </div>
                <div className="tests">
                    Test
                    <div style={{ width: 86.62, height: 86.62, left: 56.94, top: 78.25}}>
                        <CircularProgressbar value={marks} text={`${marks}%`} />
                    </div>
                    Last Test<br/>
                    100 %
                </div>

                <div>
                    HW Rating
                    


                    <div style={{ width: 86.62, height: 86.62, left: 56.94, top: 78.25}}>
                        <ReactStars
                          count={5}
                          value={4.1}
                          size={20}
                          activeColor="#ffd700"
                        />
                        (4.1)
                    </div>



                    Last Homework<br/>
                    4.5
                </div>
            </div>
        </div>
    );
};

export default UserPerformance;