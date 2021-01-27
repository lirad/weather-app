import loading from '../components/loading';

const Result = (data) => {
  const html = `
  <div class="col-span-10 mx-auto bg-white rounded-lg opacity-50 mt-10 w-full h-56 flex align-middle justify-center">
    <div class="">   
      <div class="text-3xl font-mono p-5">
      <i class="wi wi-cloudy"></i>
      ${data.main && `${data.main.temp}°C`}  
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