import React from "react"

function ChecklistItem() {
    let time = Date.now()

    return (
        <div className="checklist-item">
            <input type="checkbox"/>
            <span>Checkbox Item</span>
        </div>
    )
    
}

export default ChecklistItem