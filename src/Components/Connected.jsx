import React from "react";
import Select from 'react-select';

import { useState } from "react";
//testtt
const Connected = (props) => {

    const candidates = props.candidates.map((candidate) => ({
        label: candidate.name,
        value: candidate.index,
    }));

    const [selectedCandidate, setSelectedCandidate] = useState(null);

    // Dropdown değiştiğinde çalışacak olan bir fonksiyon oluşturun
    const handleCandidateChange = (selectedOption) => {
        setSelectedCandidate(selectedOption);
        const index = selectedOption.value;
        props.handleNumberChange(index);
    };

    return (
        <div className="connected-container vote-bg">
            <h1 className="connected-header">You are Connected to Metamask</h1>
            <p className="connected-account">Metamask Account: {props.account}</p>
            <p className="connected-account">Remaining Time: {props.remainingTime}</p>
            {props.showButton ? (
                <p className="connected-account">You have already voted</p>
            ) : (
                <div>
                    {/* <input type="number"  value={props.number} ></input> */}
                    <Select
                        placeholder="Select Candidate"
                        options={candidates}
                        value={selectedCandidate}
                        onChange={handleCandidateChange}
                    />
                    <br />
                    <button className="login-button" onClick={props.voteFunction}>Vote</button>

                </div>
            )}

            <table id="myTable" className="candidates-table">
                <thead>
                    <tr>
                        <th>
                            Candidate Names
                        </th>
                        {props.candidates.map((candidate, index) => (
                            <th key={index}>{candidate.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Candidate votes</td>
                        {props.candidates.map((candidate, index) => (
                            <td key={index}>{candidate.voteCount}</td>
                        ))}
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Connected;