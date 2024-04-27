import React ,{ useContext} from 'react'
import { GlobalContext } from '../context/GobalState'


const Transaction = ({ transtions }) => {
 const { deleteTranaction} = useContext(GlobalContext);
    const sign = transtions.amount < 0 ? '-' : '+';
   


  return (
        <li className={transtions.amount < 0 ? 'minus' : 'plus'}>
          {transtions.text} <span>{sign}${Math.abs(transtions.amount)}</span>
          <button onClick={() => deleteTranaction(transtions.id)} className="delete-btn">x</button>
        </li>
  )
}

export default Transaction