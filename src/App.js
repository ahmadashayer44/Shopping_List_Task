import "./App.css";
import Main from "./pages/Main.js";
import ContextProvider from "./Context.js";
function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Main />
      </ContextProvider>
    </div>
  );
}

export default App;
