// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Home from "./Pages/Home"

// COMPONENTS
import NavBar from "./Components/NavBar";
import { UserProvider } from "./Providers/UserProvider";
import { LoginPage } from "./Pages/LoginPage";
import { LoggedInPage } from "./Pages/LoggedInPage";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <UserProvider>
      <Router>
        <main className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/loggedInPage" element = { <LoggedInPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/cats" element={<Index />} />
            <Route path="/cats/new" element={<New />} />
            <Route exact path="/cats/:id" element={<Show />} />
            <Route path="/cats/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
