
import loading from '../components/loading';

const Result = (data) => {
  const html = `
  <div class="col-span-10 mx-auto bg-white rounded-lg  mt-10 w-full h-56 ">
    <div class="">   
      <div class="font-mono p-5 flex justify-around">
        <div class="text-center flex flex-col">
          
          <img  class="object-contain" src="http://openweathermap.org/img/wn/${data.main && data.weather[0].icon}@2x.png" /></span
          <span class="text-indigo-700"> ${data.main && data.weather[0].main}</span>
          <span> ${data.main && data.weather[0].description}</span>
        </div>
        <div class="flex flex-col justify-center">
          <div class="flex-col">
            <div class="text-2xl">
              ${data.main && `${data.main.temp.toFixed(0)}°C`}  
              <span> Temperature</span>
            </div>
            <div class="flex justify-between">
              <div class="text-red-700">
                ${data.main && `${data.main.temp_max.toFixed(0)}°C Max`}  
              </div>
              <div class="text-blue-700">
                ${data.main && `${data.main.temp_min.toFixed(0)}°C Min`}  
              </div>
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