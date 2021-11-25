import './App.css';
import InputProduct from './components/InputProduct';
import QuoteSection from './components/QuoteSection';
require('dotenv').config();


function App() {
  return (
    <div>
      <InputProduct />
      <QuoteSection />

    </div>
  );
}

export default App;
