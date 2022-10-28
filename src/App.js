import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.js';

const App = () => {
  return(
  <>
<NavBar/>
<ItemListContainer  text='Item List Container1'/>
<ItemListContainer  text='Item List Container2'/>
  </>);
}

export default App;

