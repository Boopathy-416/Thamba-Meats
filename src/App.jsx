import React from "react";
import Navbar from "./components/layout/Navbar/Navbar";
import Preloader from "./components/Preloader.jsx";
import usePreloader from "./hooks/usePreloader";
import "./App.css";

import AppRoutes from "./routes/AppRoutes.jsx";

export default function App() {
  const { progress, loaded } = usePreloader([
    // "@import url('https://fonts.googleapis.com/css2?family=Momo+Trust+Display&display=swap');",
    // "https://jsonplaceholder.typicode.com/users",
  ]);



  if (!loaded) {
    return <Preloader progress={progress} />;
  }

  return (
    <div className="app-container">

      <Navbar />
      <main className="main-content">
        <AppRoutes />
      </main>

    </div>
  );
}
