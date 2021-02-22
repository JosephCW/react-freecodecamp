import React from "react"

function ChecklistItem(props) {
    const style = props.item.completed ? {
        textDecoration: "line-through",
        color: "#bcbcbc",
        fonstStyle: "italic"
    }: null

    return (
        <div className="checklist-item">
            <input 
                type="checkbox"
                onChange={()=> props.onCheckboxChanged(props.item.id)} 
                checked={props.item.completed}
            />
            <span style={style}>{props.item.text}</span>
        </div>
    )
}

export default ChecklistItem