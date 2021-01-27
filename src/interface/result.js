
import loading from '../components/loading';

const Result = (data) => {
  const html = `
  <div class=" mx-auto bg-yellow-500 rounded-lg  mt-10 w-full h-96 md:h-64 p-5 opacity-80">
    <h2 class="font-black text-white text-3xl">${data.main && data.name} </h2>
    
      <div class="p-5 md:p-0 flex flex-col md:justify-around  md:flex-row  md:items-start">
        <div class="text-center flex  flex-row md:flex-col justify-center items-center md:w-1/2">
          <img  class="object-contain" src="http://openweathermap.org/img/wn/${data.main && data.weather[0].icon}@2x.png" />
          <div class="text-black font-black"> ${data.main && data.weather[0].main}</div>
          <span class="hidden md:block"> ${data.main && data.weather[0].description}</span>
        </div>
        <div class="flex flex-col justify-center md:w-1/2">
          <div class="flex-col">
            <div class=" text-center">
              <div class="text-6xl font-black text-white">${data.main && `${data.main.temp.toFixed(0)}`}<span class="text-xs align-text-top">°C</span></div>
            </div>
            <div class="flex justify-around">
              <div class="text-red-500 font-black">
                ${data.main && `${data.main.temp_max.toFixed(0)}<span class="text-xs align-text-top font-thin">°C</span> Max`}  
              </div>
              <div class="text-blue-500 font-black">
                ${data.main && `${data.main.temp_min.toFixed(0)}<span class="text-xs align-text-top font-thin">°C</span> Min`}  
              </div>
            </div>
            <div class="flex flex-col mt-4">
            <div class="font-black text-white text-center">
              <i class="wi wi-thermometer text-white"></i><span class="font-thin"> Feels like </span>  ${data.main && data.main.feels_like}%
              </div>
              <div class="font-black text-white text-center">
              <i class="wi wi-humidity text-white"></i><span class="font-thin"> Humimdity </span>  ${data.main && data.main.humidity}%
              </div>
              <div class="font-black text-white text-center">
              <i class="wi wi-wind ${`towards-${data.main && data.wind.deg}-deg`} text-white"></i> <span class="font-thin"> Wind </span>  ${data.main && data.wind.speed} knots
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
    </div>
  </div>
  `;

  if (data === 'loading') {
    return loading();
  }
  return html;
};

export default Result;