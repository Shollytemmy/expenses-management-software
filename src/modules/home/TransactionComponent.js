import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: #000;

font-size: 18px;
gap: 5px;
width: 100%;
& input{
  background-color: #e6e8e9;
  outline: none;
  border: 1px solid #e6e8e9;
  border-radius: 5px;
  padding: 9px 10px;
  width: 100%;
}

`;
const Cell = styled.div`
display: flex;
justify-content: space-between;

width: 100%;
padding: 10px 10px;
background: #e6e8e9;
border-right: 4px solid ${(props => props.isIncome ? 'green' : 'red')};
`;

const TransactionCell = ({transaction}) => {
  const {amount, description, type} = transaction
  return (
    
    <Cell isIncome ={type === 'income'} >
      <span>{description}</span>
      <span>{amount}</span>
    </Cell>
  )



}

export const TransactionComponent = ({transactions}) => {
   const [search , setSearch] = useState('')

   const transactionToShow = search.trim()
   ? transactions.filter((transaction) => transaction.description.toLowerCase().includes(search.toLowerCase()))  : transactions
  
  return (
    <Container>Transactions
      <input type="text" name="" id="" placeholder='search' value={search} onChange ={(e) => setSearch(e.target.value)} />
      {transactionToShow?.length? transactionToShow.map((transaction) =>(
        <TransactionCell key={transaction.id} transaction = {transaction} />
      )): 'No List yet'}
    </Container>
  )
}
