import {createTheme, ThemeProvider } from "@material-ui/core";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import SignUp from "./pages/SignUp";



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
  return (
    <ThemeProvider MuiTheme={MuiTheme}>
      <div className="App">
        <ProductPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
