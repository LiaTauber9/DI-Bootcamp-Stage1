import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/W8D1/XP/Hello';
import UserFavoriteColors from './components/W8D1/XP/UserFavoriteColors';
import Exercise4 from './components/W8D1/XP/Exercise4';
import Carouselimg from './components/W8D1/Daily/Carousel';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hello /> */}
    {/* <UserFavoriteColors/> */}
    {/* <Exercise4 /> */}
    <Carouselimg />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
