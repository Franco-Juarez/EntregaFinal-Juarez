import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {

return (
    <div>
      <NavBar />
      <ItemListContainer 
      greeting={"Estamos trabajando en algo especial"}/>
    </div>
  )
}

export default App