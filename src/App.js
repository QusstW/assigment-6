import "./App.css";
import Nav from "./components/nav/Nav";
import Tabs from "./components/tabs/Tabs";
import MainContent from "./components/content/MainContent";
import AppProvider from "./provider/AppProvider";

function App() {
  return (
    <AppProvider>
      <Nav />
      <Tabs />
      <MainContent />
    </AppProvider>
  );
}

export default App;

