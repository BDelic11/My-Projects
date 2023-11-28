import React, { useState } from 'react'
import '../Form/index.css'

const Form = ({ playerNameHandler}) => {

    const [playerOneName, SetPlayerOneName] = useState("");
    const [playerTwoName, SetPlayerTwoName] = useState("");

    const playerOneHandler = (e) => {
        SetPlayerOneName(e.target.value);
    }
    const playerTwoHandler = (e) => {
        SetPlayerTwoName(e.target.value);
    }


    const submitHandler = (e) => {
        e.preventDefault();

        if (playerOneName === playerTwoName) {
            alert('Same player names!');
            return;
        }
        else if (playerOneName === "" || playerTwoName === "") {
            alert('Not entered both player names')
            return;
        }
        playerNameHandler(playerOneName, playerTwoName);
    }

    return (
        <section className='section'>
            <form action="" className='form' onSubmit={submitHandler}>
                <h2 className='title'>Tic Tac Toe</h2>
                <label htmlFor="playerOne">Enter player one name:</label>
                <input
                    placeholder='Player one...'
                    className='input'
                    name='playerOneName'
                    onChange={playerOneHandler}
                    value={playerOneName}

                    />
                <label htmlFor="playerOne">Enter player two name:</label>
                <input
                    placeholder='Player two...'
                    className='input'
                    name='playerTwoName'
                    onChange={playerTwoHandler}
                    value={playerTwoName}
                    />
                <button
                    type='submit'
                    className='button'>Start</button>
            </form>

        </section>
    )

}

export default Form;