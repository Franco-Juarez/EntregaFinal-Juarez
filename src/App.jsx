import { CartProvider } from "./context/CartContext";
import MainRouter from "./routes/MainRouter";

const App = () => {
  return (
    <CartProvider>
      <div>
        <MainRouter />
      </div>
    </CartProvider>
  );
};

export default App;
