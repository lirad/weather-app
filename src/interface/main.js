
const Main = () => {
  const html = `
  <div class="flex flex-col md:flex-row justify-between items-center">
    <div class="w-full md:w-1/2">
      <span class="font-black text-yellow-500 text-4xl"> <i class="wi wi-horizon-alt"></i> Find Weather </span>
    </div>
    <div class="w-full flex md:w-1/2">
      <div class="w-10/12">
        <input class="rounded-lg p-2 text-2xl rounded-r-none leading-3 tracking-wider outline-none  transition-all
      focus:border-blue-200 h-16 border-4 border-yellow-500  w-full bg-white"/>
      </div>
      <div class="w-2/12  h-16 border-4 border-l-0 rounded-l-none
      border-yellow-500 rounded bg-yellow-500 text-white flex items-center text-center hover:opacity-90" id="find">
        <div class="w-full cursor-pointer "  >Add city</div>
      </div>
    </div>
    </div>
    <div class="w-full" id="result">
    
    </div>

  `;

  return html;
};

export default Main;