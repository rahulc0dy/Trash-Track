import AuthDetails from "./components/AuthDetails";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import TrashCard from "./components/TrashCard";

function App() {
    return (
        <div className="App">
            <Navbar />
            <SignIn />
            <SignUp />
            <AuthDetails />
            <Home />
            <TrashCard />
            <Footer />
        </div>
    );
}

export default App;
