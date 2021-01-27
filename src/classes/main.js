import { currentWeather } from '../api/weather';
import Result from '../interface/result';
import DB from './localstorage';


const MainMethods = {
  async fetchData(citie) {
    const cityData = await currentWeather(citie)
      .then(res => res)
      .catch(() => this.renderResult('error'));
    return cityData;
  },
  getElementValue() {
    const el = document.querySelector('input').value;
    return el;
  },
  addEventListener() {
    const el = document.getElementById('find');
    el.addEventListener('click', () => this.addCity());
  },
  addRemoveEventListners() {
    const el = document.querySelectorAll('.remove');
    for (let i = 0; i < el.length; i++) {
      el[i].addEventListener('click', () => this.removeCity(i));
    }
  },
  addCity() {
    DB.addCity(this.getElementValue());
    this.buildArrayOfCities();
  },
  removeCity(cityId) {
    DB.removeCity(cityId);
    this.buildArrayOfCities();
  },
  renderResult(data) {
    const el = document.getElementById('result');
    el.innerHTML = Result(data);
  },
  async buildArrayOfCities() {
    const cities = DB.getCities();
    const citiesData = [];
    for (let i = 0; i < cities.length; i++) {
      let data = await this.fetchData(cities[i]);
      citiesData.push(data);
    }
    this.renderResult(citiesData);
    this.addRemoveEventListners();
  },
};


export default MainMethods;