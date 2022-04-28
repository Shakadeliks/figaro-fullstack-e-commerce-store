import {createTheme, ThemeProvider } from "@material-ui/core";
import Cart from "./pages/Cart";
import { Product } from "./pages/Cart/Cart.styles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import SignUp from "./pages/SignUp";
import Products from "./components/Products";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";


const MuiTheme = createTheme({
  palette: {
    primary: {
      main: "#1a1517"
    },
    secondary: {
      main: "#cbc694"
    }
  }
})

function App() {

  const user = true;

  return (
    <ThemeProvider MuiTheme={MuiTheme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/products/*" element={ <ProductList /> } />
            <Route path="/product/:id" element={ <ProductPage /> } />

            <Route path="/cart" element={ <Cart /> } />

            <Route 
              path="/login" 
              element={ user ? <Navigate replace to="/" /> : <Login /> } 
            />
            <Route 
              path="/signup" 
              element={ user ? <Navigate replace to="/" /> : <SignUp /> } 
            />


          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
