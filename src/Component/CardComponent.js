import React from 'react'

export default function CardComponent({type}) {
    return(
        <div style={{margin:"5px"}}>
        {
            (type==="homework")?(
                <div style={{border:`0.5px #939393 solid`,borderRadius:`4px`}}>
                    <div style={{backgroundColor:`orange`,color:`white`}}>
                        Homework
                     </div>
                     <div>
                         <div style={{padding:"3px"}}>
                             Complete Homework
                          </div>
                          <div style={{fontWeight:`400`, fontSize:"12px", padding:"3px"}}>
                            Due at 12:00 PM 
                          </div>
                     </div>   
                </div>
            ):(
                <div></div>
            )
        }
        {
            (type==="test")?(
                <div style={{border:`0.5px #939393 solid`,borderRadius:`4px`}}>
                    <div style={{backgroundColor:`red`,color:`white`}}>
                        Test
                     </div>
                     <div>
                          <div style={{fontWeight:`400`, fontSize:"12px", padding:"3px"}}>
                            12:00AM - 12:00 PM 
                          </div>
                     </div>   
                </div>
            ):(
                <div></div>
            )
        }
        {
            (type==="class")?(
                <div style={{border:`0.5px #939393 solid`,borderRadius:`4px`}}>
                    <div style={{backgroundColor:`green`,color:`white`}}>
                        Class
                     </div>
                     <div>
                         <div style={{padding:"3px"}}>
                             Test Due
                          </div>
                          <div style={{fontWeight:`400`, fontSize:"12px", padding:"3px"}}>
                            12:00AM - 12:00 PM 
                          </div>
                     </div>   
                </div>
            ):(
                <div></div>
            )
        }
        </div>

    )
}