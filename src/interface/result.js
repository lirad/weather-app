
import loading from '../components/loading';

const Result = (data) => {
  const html = [];

  data.map((item, index) => {
    const i = `
    <div class=" mx-auto bg-yellow-500 rounded-lg  mt-10 w-full h-auto md:h-64 p-5 opacity-80 relative">
    <div class="remove absolute top-0 right-0 h-5 w-auto px-5 text-sm rounded-full text-center my-auto bg-yellow-600 cursor-pointer hover:bg-red-500 text-white  ">Remove</div>
    <h2 class="font-black text-white text-2xl">${item.main && item.name}, <span class="font-thin">${item.main && item.sys.country}</span> </h2>
    
      <div class="p-5 md:p-0 flex flex-col md:justify-around  md:flex-row  md:items-start">
        <div class="text-center flex  flex-row md:flex-col justify-center items-center md:w-1/2">
          <img  class="object-contain" src="http://openweathermap.org/img/wn/${item.main && item.weather[0].icon}@2x.png" />
          <div class=" font-black text-xl text-white"> ${item.main && item.weather[0].main}</div>
          <span class="hidden md:block capitalize font-thin text-white"> ${item.main && item.weather[0].description}</span>
        </div>
        <div class="flex flex-col justify-center md:w-1/2">
          <div class="flex-col">
            <div class=" text-center">
              <div class="text-6xl font-black text-white">${item.main && `${item.main.temp.toFixed(0)}`}<span class="text-xs align-text-top">°C</span></div>
            </div>
            <div class="flex justify-around">
              <div class="text-red-500 font-black">
                ${item.main && `${item.main.temp_max.toFixed(0)}<span class="text-xs align-text-top font-thin">°C</span> Max`}  
              </div>
              <div class="text-blue-500 font-black">
                ${item.main && `${item.main.temp_min.toFixed(0)}<span class="text-xs align-text-top font-thin">°C</span> Min`}  
              </div>
            </div>
            <div class="flex flex-col mt-4">
            <div class="font-black text-white text-center">
              <i class="wi wi-thermometer text-white"></i><span class="font-thin"> Feels like </span>  ${item.main && item.main.feels_like}%
              </div>
              <div class="font-black text-white text-center">
              <i class="wi wi-humidity text-white"></i><span class="font-thin"> Humimdity </span>  ${item.main && item.main.humidity}%
              </div>
              <div class="font-black text-white text-center">
              <i class="wi wi-wind ${`towards-${item.main && item.wind.deg}-deg`} text-white"></i> <span class="font-thin"> Wind </span>  ${item.main && item.wind.speed} knots
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;

    return html.push(i);
  });


  if (data === 'loading') {
    return loading();
  }
  return html.join(" ");
};

export default Result;