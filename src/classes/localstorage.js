const DB = {
  initialize() {
    const defaultCities = ['Fortaleza', 'Campina Grande'];
    if (window.localStorage.getItem('cities') == null) {
      window.localStorage.setItem('cities', JSON.stringify(defaultCities));
    }
  },
  getCities() {
    let cities = [];
    if (window.localStorage.getItem('cities')) {
      cities = JSON.parse(window.localStorage.getItem('cities'));
    }
    return cities;
  },
  addCity(city) {
    const cities = this.getCities();
    console.log(Array.isArray(cities));
    cities.push(city);
    window.localStorage.setItem('cities', JSON.stringify(cities));
  },
  removeCity(cityId) {
    const cities = this.getCities();
    cities.splice(cityId, 1);
    this.updateCities(cities);
  },
  updateCities(updatedCities) {
    window.localStorage.setItem('cities', JSON.stringify(updatedCities));
  },
};


export default DB;