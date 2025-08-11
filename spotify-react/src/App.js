import "./App.css";
import Playlists from "./container-playlists/playlists.js";
import Footer from "./footer/footer.js";
import Header from "./header/header.js";
import "./media-queries.css";
import Sidebar from "./side-bar/side-bar.js";

function App() {
    return (
        <main className="main-container">
            <Sidebar />
            <Header />
            <Playlists />
            <Footer />
        </main>
    );
}

export default App;
