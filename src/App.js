import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import BasicNavbar from "./components/BasicNavbar";
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <BasicNavbar />
      <ItemListContainer greeting={'¡Bienvenidos a la tienda de Kev!'}/>
    </>
  );
}

export default App;