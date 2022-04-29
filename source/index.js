import App from './app';

import ReactDOM from "react-dom";
import {
    BrowserRouter as Router
  } from "react-router-dom";


ReactDOM.render(
        <Router>
            <App />
        </Router>
    , 
    document.getElementById("root")

    );

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
    module.hot.accept();
}