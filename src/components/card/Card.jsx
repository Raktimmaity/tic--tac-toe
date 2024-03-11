import Icon from "../icon/Icon";
import './Card.css'
function Card({gameEnd, player, onPlay, index}) {
    let icon = <Icon/>
    if(player == 'x'){
        icon = <Icon name="cross"/>
    }
    else if(player == '0'){
        icon = <Icon name="circle"/>
    }
    return(
        <div className="p-3 w-[100px] h-[100px] text-4xl rounded-lg flex justify-center items-center card" onClick={()=> !gameEnd && player == "" && onPlay(index)}>
            {icon}
        </div>
    )
}

export default Card;