import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home.tsx";
import More from "./components/More.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/more/:id" element={<More />} />
        </Routes>
    </BrowserRouter>
);
