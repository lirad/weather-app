import { currentWeather } from '../api/weather';
import Result from '../interface/result';


const MainMethods = {
  async fetchData() {
    this.renderResult('loading');
    currentWeather(this.getElementValue())
      .then(res => this.renderResult(res))
      .catch(() => this.renderResult('error'));
  },
  getElementValue() {
    const el = document.querySelector('input').value;
    return el;
  },
  addEventListener() {
    const el = document.getElementById('find');
    el.addEventListener('click', () => this.fetchData());
  },
  renderResult(data) {
    const el = document.getElementById('result');
    el.innerHTML = Result(data);
  },
};


export default MainMethods;