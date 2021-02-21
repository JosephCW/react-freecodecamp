import React from "react"

function ChecklistItem(props) {

    console.log(props)

    return (
        <div className="checklist-item">
            <input 
                type="checkbox" 
                onChange={()=> props.onCheckboxChanged(props.item.id)} 
                checked={props.item.completed}
            />
            <span>{props.item.text}</span>
        </div>
    )
}

export default ChecklistItem