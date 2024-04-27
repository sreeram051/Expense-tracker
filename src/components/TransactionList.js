import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GobalState'
import Transaction from './Transaction'


const TransactionList = ({transtion}) => {

  const {transtions} = useContext(GlobalContext)
  

  return (
    <>
     <h3>History</h3>
      <ul  className="list">
      {transtions.map(transtion => (<Transaction key={transtion.id} transtions={transtion}/>))}
      </ul>
    </>
  )
}

export default TransactionList