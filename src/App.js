import styled from 'styled-components'
import HomeComponent from './modules/home';


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 1rem 8px;
font-family: 'Montserrat', sans-serif;
`;

const Header = styled.span`
font-size: 25px;
font-weight: bold;

`;

function App() {
  return <Container>
    <Header>Expenses Management Software</Header>
    <HomeComponent />
   
  </Container>
  
}

export default App;
