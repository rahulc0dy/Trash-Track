import AuthDetails from "./components/AuthDetails";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
    return (
        <div className="App">
            <Navbar />
            <SignIn />
            <SignUp />
            <AuthDetails />
        </div>
    );
}

export default App;
