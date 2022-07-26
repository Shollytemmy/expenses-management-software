import React, { useState } from 'react'
import styled from 'styled-components'


const AddTransactionViewComponent = styled.div`
display: flex;
flex-direction: column;
border: 1px solid #e6e8e9;
gap: 10px;
padding:  20px;
margin: 15px 20px;
border: 1px solid green;
width: 100%;
& input{
    outline: none;
    padding: 10px 12px;
    border: 1px solid #e6e8e9

}
`

const RadioBox = styled.div`
display: flex;
`

export const AddTransactionView = ({AddTransaction, setIsTransOpen, handleAddTransaction}) => {
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('expenses')

  const addTransaction = () =>{
    handleAddTransaction(
      {
        amount: Number(amount),
        description,
        type,
        id: new Date().getTime().toString()
      }
    )
    setIsTransOpen()
  }
  return (
    <AddTransactionViewComponent>
        <input type="number"
         placeholder='Amount'
         value={amount}
         onChange={(e) => setAmount(e.target.value)}
          />
       <input type="text"
        name="" id=""
         placeholder='Descrption'
         value={description}
         onChange ={(e) => setDescription(e.target.value)}
         
         
         />
       <RadioBox >
        <input type="radio"
         name="type" id="expenses"
          value="expenses"
          checked ={type === 'expenses'}
          onChange = {(e) => setType(e.target.value)}
           />
        <label htmlFor="expenses">Expenses</label>

        <input type="radio"
         name="type" id="income"
          value="income"
          checked ={type === 'income'}
          onChange={(e) => setType(e.target.value)}
           />
        <label htmlFor="income">Income</label>
       </RadioBox>

       <AddTransaction onClick = {addTransaction}>Add Transaction</AddTransaction>


        </AddTransactionViewComponent>
  )
}
