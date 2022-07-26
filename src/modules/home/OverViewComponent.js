import React, { useState } from 'react'
import styled from 'styled-components'
import { AddTransactionView } from './AddTransactionView';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 1rem 8px;
width: 100%
`;

const BalanceBox = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
font-weight: bold;
font-size: 18px



`;

const AddTransaction = styled.button`
background-color: red;
color: #fff;
border: none;
border-radius: 5px;
padding: 5px 10px;
font-weight: bold;
cursor: pointer
`;

const ExpensesContainer = styled.div`

display: flex;
gap: 15px;
margin: 20px

`;

const ExpensesBox = styled.div`
border: 1px solid #e6e8e9;
display: flex;
flex-direction: column;
padding: 15px 30px;
width: 135px;
& span{
  font-size: 18px;
  font-weight: bold;
  color: ${(props) =>props.isIncome ? 'green' : 'red'}
}
`;

export const OverViewComponent = ({handleAddTransaction, income, expense}) => {
  const [isTransOpen, setIsTransOpen] = useState(false)
  return (
    <Container>
      <BalanceBox> Balance ${income - expense}
        <AddTransaction onClick={() => setIsTransOpen(!isTransOpen)}>
          {isTransOpen ? 'CANCEL': 'ADD'}
          </AddTransaction>
      </BalanceBox>
      {isTransOpen && <AddTransactionView  AddTransaction = {AddTransaction} setIsTransOpen = {setIsTransOpen} handleAddTransaction = {handleAddTransaction}/>}
      <ExpensesContainer >
        <ExpensesBox isIncome ={true} >
          Income<span>${income}</span>
        </ExpensesBox>
                <ExpensesBox isIncome ={false} >
          Expenses<span>${expense}</span>
        </ExpensesBox>

      </ExpensesContainer>
      </Container>
  )
}
