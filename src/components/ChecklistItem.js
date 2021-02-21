import React from "react"

function onCheckChanged() {
    console.log('abc')
}

function ChecklistItem(props) {

    return (
        <div className="checklist-item">
            <input 
                type="checkbox" 
                onChange={onCheckChanged} 
                checked={props.item.completed}
            />
            <span>{props.item.text}</span>
        </div>
    )
    
}

export default ChecklistItem