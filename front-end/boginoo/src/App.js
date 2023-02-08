import './App.css';
import Header from './container/Header'
import { Homepage } from './pages/HomePage';
import {Footer} from './container/Footer';



function App() {
  return (
    <div>
         <div>
      <Header/>
      <Homepage/>
      <Footer/>
    </div>
    </div>
 
  );
}

export default App;
