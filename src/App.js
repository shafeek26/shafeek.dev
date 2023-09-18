import Header from "./components/header/Header";
import SocialIconsLeft from "./components/social/SocialIconsLeft";
import SocialRight from "./components/social/SocialRight";
import Home from "./pages/Home";


function App() {
  return (
    <div className="app">
      <Header />
      <SocialIconsLeft/>
      <SocialRight />
      <Home />
    </div>
  );
}

export default App;
