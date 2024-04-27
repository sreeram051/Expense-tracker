import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpanse from './components/IncomeExpanse';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GobalState';


function App() {
  return (
   <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpanse/>
        <TransactionList/> 
        <AddTransaction/>
      </div>
   </GlobalProvider>
  );
}

export default App;
