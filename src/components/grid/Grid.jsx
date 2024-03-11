import { useState } from "react";
import Card from "../card/Card";
import isWinenner from "../../helper/checkWinner";
import './Grid.css'

function Grid({numOfCards}) {
    const [board, setBoard] = useState(Array(numOfCards).fill(""));
    const [turn, setTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    function reset(){
        setTurn(true);
        setWinner(null);
        setBoard(Array(numOfCards).fill(""));
    }
    function play(index){
        if(turn == true){
            board[index] = "0";
        }
        else{
            board[index] = "x";
        }
        const win = isWinenner(board, turn ? "0" : "x");
        if(win){
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn);
    }
    return(
        <>
        {
            winner && (
                <div className="flex justify-center items-center">
                    <h1 className="text-4xl text- center">Winner is: {winner}</h1>
                </div>
            )
        }
            <div className="flex flex-col flex-wrap gap-10 justify-between">
                <h1 className="text-4xl w-full text-center">Your Turn : {(turn) ? '0' : 'x'}</h1>
                    <div className="grid grid-cols-3 gap-5">
                        {board.map((el, idx)=> <Card gameEnd={winner ? true : false} key={idx} onPlay={play} player={el} index={idx}/>)}
                    </div>
            </div>
                    <div className="mt-24 flex justify-center flex-col items-center gap-6">
                        <button className="p-3 text-xl btn font-bold" onClick={reset}>Reset Game</button>
                    </div>
        </>
    )
}

export default Grid;