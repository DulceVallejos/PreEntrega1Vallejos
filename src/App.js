
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


//Las funciones en react no pueden reinderizar mas de un elemento, por eso, en este caso como usamos varios todos iran dentro del div o fragmento
const App = () => {
  return (
    <>
    <NavBar/>
    <hr></hr>
    <ItemListContainer text='¡OFERTAS DE LA SEMANA!'/>
    <ItemListContainer text='2X1 en perfumes textiles'/>
    <ItemListContainer text='10% pagando en efectivo al recibir tu compra'/>
    <ItemListContainer text='Combo de locos:
    (5L de jabón liquido, 5L de suavizante, 1 perfume textil 500ml)'/>
    </>
  )
}
export default App;
