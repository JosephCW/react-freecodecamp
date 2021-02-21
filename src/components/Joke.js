import React from "react"

function Joke(props) {
    const question = props.question
    const punchLine = props.punchLine

    return (
        <div className="joke">
            <span style={{display: question ? "block" : "none"}} className="question">{question}</span>
            <span className="punch-line">{punchLine}</span>
        </div>
    )
}

export default Joke