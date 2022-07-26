import { useEffect, useState } from "react";
import styled from "styled-components"
import { OverViewComponent } from "./OverViewComponent";
import { TransactionComponent } from "./TransactionComponent";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 1rem 8px;
width: 360px;

`;
const HomeComponent = () => {
    const [transactions, updateTransactions] = useState([])
     const [expense, updateExpense] = useState(0)
     const [income, updateIncome] = useState(0)


    const handleAddTransaction = (data) => updateTransactions((prevTransaction)=>[...prevTransaction, data])    
    

     const handleCalculateBalance = () => {

            let expense = 0;
            let income = 0;

            transactions.map((transaction) => transaction.type === 'expenses'
             ? (expense = expense + transaction.amount) 
             : (income = income + transaction.amount)
             )

            updateExpense(expense)
            updateIncome(income)

        }

       
        // eslint-disable-next-line react-hooks/exhaustive-deps
        useEffect(() => handleCalculateBalance() , [transactions])
    return(
        <Container>
            <OverViewComponent handleAddTransaction = {handleAddTransaction}  income ={income} expense = {expense}/>
            <TransactionComponent transactions ={transactions} />
        </Container>

    )
}

export default HomeComponent