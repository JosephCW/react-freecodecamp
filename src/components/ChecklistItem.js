import React from "react"

function ChecklistItem(props) {

    return (
        <div className="checklist-item">
            <input type="checkbox" checked={props.item.completed}/>
            <span>{props.item.text}</span>
        </div>
    )
    
}

export default ChecklistItem