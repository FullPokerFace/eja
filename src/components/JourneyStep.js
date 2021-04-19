import React from 'react'

export const JourneyStep = (props) => {
    const {nodeTitle, messageTitle, messageContent, detailsLink} = props.stepData;
    return (
        <div className="journey-view-step">
            <div className="node">
                <div className="node-title">{nodeTitle}</div>
                {!props.lastNode && <div className="vertical-connect"></div>}
            </div>
            <div className="horizontal-connect"></div>
            <div className="message">
                <h3>{messageTitle}</h3>
                <p>
                    {messageContent}
                </p>
                <a href={detailsLink}>Details</a>
            </div> 
        </div>
    )
}
