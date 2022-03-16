
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import {createTheme, ThemeProvider } from "@material-ui/core";

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
      </div>
    </ThemeProvider>
  );
}

export default App;
