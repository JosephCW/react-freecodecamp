import React from "react"

import ChecklistItem from "./ChecklistItem"
import Joke from "./Joke"
import checklistData from "../data/checklistData"

// function App() {
//     // return (
//     //     <div className="checklist">
//     //         <ChecklistItem />
//     //         <ChecklistItem />
//     //         <ChecklistItem />
//     //         <ChecklistItem />
//     //     </div>
//     // )

//     // return (
//     //     <div className="joke-list">
//     //         <Joke 
//     //             question = "What's green and has wheels?"
//     //             punchLine = "Grass! I lied about the wheels."
//     //         />
//     //         <Joke 
//     //             question = "Why do scuba divers jump backwards out of the boat?"
//     //             punchLine = "Because if they jumped forward, they’d still be in the boat."
//     //         />
//     //         <Joke 
//     //             question = "What do you call a broken can opener?"
//     //             punchLine = "A can’t opener."
//     //         />
//     //         <Joke 
//     //             question = "What’s the best thing about Switzerland?"
//     //             punchLine = "Well the flag’s a big plus."
//     //         />
//     //         <Joke 
//     //             punchLine = "Be wary of stairs…they’re almost always up to something."
//     //         />
//     //     </div>
//     // )

//     return (
//         <div className="checklist">
//             {checklistData.map((item) => <ChecklistItem key={item.id} item={item} />)}
//         </div>
//     )

// }

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            items: checklistData
        }
        // Binding needed to have this access from within handleCheckboxChanged
        this.handleCheckboxChanged = this.handleCheckboxChanged.bind(this)
    }

    handleCheckboxChanged(id) {
        console.log('Checkbox Changed')
        this.setState((prevState) => {
            const updatedItems = prevState.items.map(item => {
                if (item.id == id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }

                return item
            })

            return {
                items: updatedItems
            }
        })
    }

    render() {
        const checklistItems = this.state.items.map((item) => <ChecklistItem key={item.id} item={item} onCheckboxChanged={this.handleCheckboxChanged}/>)

        return (
            <div className="checklist">
                {checklistItems}
            </div>
        )
    }
}

export default App