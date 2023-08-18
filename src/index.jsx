/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import {  Router, Route, Routes } from "@solidjs/router"; // 👈 Import the router

import HomePage  from "./pages/Home/__index.jsx";
import FeaturesPage  from "./pages/Features/__index.jsx";
import FAQPage from "./pages/FAQ/__index.jsx";

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
    <Router> 
      <Routes>
        <Route path="/" component={HomePage} /> {/* 👈 Define the home page route */}
        <Route path="/features" component={FeaturesPage} /> {/* 👈 Define the about page route */}
        <Route path="/support" component={FAQPage} /> {/* 👈 Define the FAQ page route */}
      </Routes>
    </Router>
  ), root
);
