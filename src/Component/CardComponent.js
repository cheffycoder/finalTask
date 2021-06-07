import React from 'react'

export default function CardComponent({type}) {
    return(
        <div style={{}}>
        {
            (type==="homework")?(
                <div style={{border:`0.5px #939393 solid`,borderRadius:`4px`}}>
                    <div style={{backgroundColor:`orange`,color:`white`}}>
                        Homework
                     </div>
                     <div>
                         <div>
                             Shivam homework
                          </div>
                          <div style={{fontWeight:`500`}}>
                             due to 12:00 PM 
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
                         <div>
                             Shivam homework
                          </div>
                          <div style={{fontWeight:`500`}}>
                             due to 12:00 PM 
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
                         <div>
                             Shivam homework
                          </div>
                          <div style={{fontWeight:`500`}}>
                             due to 12:00 PM 
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