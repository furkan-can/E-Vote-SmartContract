import React from "react";

const Finished = (props) => {
    return (
        <div className="login-container win-bg">
            <h1 className="welcome-message">Voting is Finished</h1>
            <h2 className="winner-message">{
                props.winner === null ? "There is no winner" : "Winner is " + props.winner.name
            }</h2>
            <p className="welcome-message">You can see the results below</p>
            
            <table id="myTable" className="candidates-table finish-bg">
                <thead>
                    <tr>
                        <th>
                            Candidate Names
                        </th>
                        {props.result.map((candidate, index) => (
                            <th key={index}>{candidate.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Candidate votes</td>
                        {props.result.map((candidate, index) => (
                            <td key={index}>{candidate.voteCount}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Finished;