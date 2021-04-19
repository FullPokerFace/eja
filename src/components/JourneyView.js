import React from 'react'
import '../App.css'
import { JourneyStep } from './JourneyStep'

export const JourneyView = ({steps}) => {
    return (
        <div className="journey-view-container">
            {
                steps.map((step, index) => 
                    <JourneyStep key={step.id} stepData={step} lastNode={steps.length-1 === index}/>)
            }
        </div>
    )
}
