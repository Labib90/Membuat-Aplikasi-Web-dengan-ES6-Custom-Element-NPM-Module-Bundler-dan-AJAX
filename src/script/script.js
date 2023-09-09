const axios = require('axios');
const _ = require('lodash');
const $ = require('jquery');

import main from "./script/view/main.js";
import 'regenerator-runtime';
import './styles/style.css';
import './script/component/app-bar.js';
import main from './script/view/main.js';
 
document.addEventListener("DOMContentLoaded", main);

let xhr = new XMLHttpRequest();
xhr.open('GET', '', true);
xhr.onload = function () {
    if (this.status >= 200 && this.status < 300) {
        console.log(JSON.parse(xhr.responseText));
    } else {
        console.error(xhr.statusText);
    }
};
xhr.onerror = function () {
  console.error(xhr.statusText);
};
xhr.send(null);


fetch('')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => console.log(json))
    .catch(error => console.log('There has been a problem with the fetch operation: ' + error.message));