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
                <button className="schedule-btn btn-primary">+ Schedule Activity</button>
            </div>


            <div className="tableHeading">
                <div className="tableContent" style={{backgroundColor:`grey`}}>
                    <span>MON
                        <div style={{paddingTop:`10px`}}>
                            <CardComponent type="homework"/>
                            <CardComponent type="test"/>
                            <CardComponent type="class"/>
                        </div>
                    </span>
                    <span>TUE
                    <div style={{paddingTop:`10px`}}>
                            <CardComponent type="homework"/>
                            <CardComponent type="test"/>
                            <CardComponent type="class"/>
                        </div>
                    </span>
                    <span>WED
                    <div style={{paddingTop:`10px`}}>
                            <CardComponent type="homework"/>
                            <CardComponent type="test"/>
                            <CardComponent type="class"/>
                        </div>
                    </span>
                    <span>THU
                    <div style={{paddingTop:`10px`}}>
                            <CardComponent type="homework"/>
                            <CardComponent type="test"/>
                            <CardComponent type="class"/>
                        </div>
                    </span>
                    <span>FRI
                    <div style={{paddingTop:`10px`}}>
                            <CardComponent type="homework"/>
                            <CardComponent type="test"/>
                            <CardComponent type="class"/>
                        </div>
                    </span>
                    <span>SAT<div style={{paddingTop:`10px`}}>
                            <CardComponent type="homework"/>
                            <CardComponent type="test"/>
                            <CardComponent type="class"/>
                        </div></span>
                    <span>SUN
                    <div style={{paddingTop:`10px`}}>
                            <CardComponent type="homework"/>
                            <CardComponent type="test"/>
                            <CardComponent type="class"/>
                    </div>
                    </span>
                </div>
            </div>
              
        </div>
    )
}
