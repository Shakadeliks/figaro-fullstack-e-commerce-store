
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import {createTheme, ThemeProvider } from "@material-ui/core";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

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
        <Navbar />
        <Carousel />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
