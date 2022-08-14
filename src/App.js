import Header from "./components/home/Header";
import Router from "./shared/Router"
import ProfileComponent from "./components/profile/ProfileComponent";

function App() {
  return (
    <div className="App">
      <Header/>
      <ProfileComponent />
    </div>
  );
}

export default App;
