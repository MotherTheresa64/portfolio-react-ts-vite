import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// AOS: Animate On Scroll
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Initialize AOS with full config
AOS.init({
  duration: 800,      // Animation duration in ms
  once: false,        // Allow re-triggering when scrolling up
  mirror: false,       // Optional: animate out on scroll past
  easing: "ease-in-out", // Optional: smooth easing
  offset: 120,        // Trigger offset in px
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
