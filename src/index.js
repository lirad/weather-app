import 'tailwindcss/tailwind.css';
import DB from './classes/localstorage';
import utils from './classes/utils';
import MainMethods from './classes/main';
import Main from './interface/main';


const routes = () => {
  const url = utils.checkForHashInUrl();

  switch (true) {
    default:
      window.location.hash = '#index';
      document.querySelector('#content').innerHTML = Main();
      MainMethods.addEventListener();
      document.querySelector('input').value = 'Fortaleza';
      MainMethods.fetchData();

      break;
  }
};


const urlListner = () => {
  window.onhashchange = () => routes();
};


document.addEventListener('DOMContentLoaded', () => {
  routes();
  urlListner();
});

DB.initialize();
