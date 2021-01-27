
const Main = () => {
  const html = `
  <div class="flex">
    <div class="w-10/12">
      <input class="rounded-lg p-2 text-2xl rounded-r-none leading-3 tracking-wider outline-none border-r-0 transition-all
    focus:border-yellow-200 h-16 border-4 border-blue-100  w-full bg-white"/>
    </div>
    <div class="w-2/12 focus:border-yellow-200 h-16 border-4 border-l-0 rounded-l-none
    border-blue-100 rounded bg-indigo-200 text-white flex items-center text-center hover:opacity-90" id="find">
      <div class="w-full cursor-pointer "  >Find</div>
    </div>
  </div>
    
    <div class="w-full " id="result">
    
    </div>

  `;

  return html;
};

export default Main;