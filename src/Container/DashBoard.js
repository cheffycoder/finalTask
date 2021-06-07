import React from 'react'
import CardComponent from '../Component/CardComponent'
import UserDetails from '../Component/UserDetails'
import UserPerformance from '../Component/UserPerformance'
import './DashBoard.css'

export default function DashBoard() {
    return (
        <div className="dashboard">
            <div className="dashboard-container">
                <UserDetails/>
                <UserPerformance/>  
            </div>

            <div className="activity-container">
                <span className="activity-date">Activities | 26th Apr, 2020</span>
                <div className="line"></div>
                <button className="schedule-btn btn-primary" style={{borderRadius:"9px", padding:"8px 12px"}}>+ Schedule Activity</button>
            </div>


            <div className="tableHeading">
                <div className="tableContent">
                    <span>MON
                        <div style={{paddingTop:`10px`}}>
                            <CardComponent type="homework"/>
                            <CardComponent type="class"/>
                            <CardComponent type="class"/>
                            <CardComponent type="class"/>
                            <CardComponent type="test"/>
                            <CardComponent type="test"/>
                        </div>
                    </span>
                    <span>TUE
                    <div style={{paddingTop:`10px`}}>
                            <CardComponent type="homework"/>
                            <CardComponent type="class"/>
                            <CardComponent type="class"/>
                            <CardComponent type="class"/>
                        </div>
                    </span>
                    <span>WED
                    <div style={{paddingTop:`10px`}}>
                            <CardComponent type="homework"/>
                            <CardComponent type="test"/>
                            <CardComponent type="test"/>
                        </div>
                    </span>
                    <span>THU
                    <div style={{paddingTop:`10px`}}>
                            <CardComponent type="class"/>
                            <CardComponent type="class"/>
                            <CardComponent type="test"/>
                        </div>
                    </span>
                    <span>FRI
                    <div style={{paddingTop:`10px`}}>
                            <CardComponent type="homework"/>
                            <CardComponent type="class"/>
                            <CardComponent type="class"/>
                            <CardComponent type="class"/>
                            <CardComponent type="test"/>
                            <CardComponent type="test"/>
                        </div>
                    </span>
                    <span>SAT<div style={{paddingTop:`10px`}}>
                            <CardComponent type="homework"/>
                            <CardComponent type="class"/>
                            <CardComponent type="test"/>
                        </div></span>
                    <span>SUN
                    <div style={{paddingTop:`10px`}}>
                            <CardComponent type="class"/>
                            <CardComponent type="class"/>
                            <CardComponent type="class"/>
                            <CardComponent type="test"/>
                    </div>
                    </span>
                </div>
            </div>
              
        </div>
    )
}
