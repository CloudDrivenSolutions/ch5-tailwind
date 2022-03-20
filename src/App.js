import { useState } from "react";

import { AiOutlineLaptop, AiOutlineDesktop } from "react-icons/ai";
import { FiAirplay, FiVideo } from "react-icons/fi";

const buttons = [
  { name: "Computer", icon: AiOutlineDesktop },
  { name: "Laptop", icon: AiOutlineLaptop },
  { name: "BYOD", icon: FiAirplay },
  { name: "Doc Cam", icon: FiVideo },
];

function App() {
  const [active, setActive] = useState(0);

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-gradient-to-br from-fuchsia-500 to-indigo-600">
      {/* <div className="grow flex items-center justify-center text-gray-100 text-2xl font-semibold">
        {buttons[active].name}
      </div> */}
      <div className="grow grid grid-cols-4 gap-8 m-8">
        <div className="bg-gray-200 bg-opacity-80 shadow-xl rounded-md">
          <p className="text-center text-xl font-medium mt-2">
            {buttons[active].name}
          </p>
        </div>
        <div className="bg-gray-200 bg-opacity-80 shadow-xl rounded-md col-span-3"></div>
      </div>
      <div className="h-32 xl:h-24 hd:h-36 bg-slate-700 bg-opacity-70 px-4 py-4 flex justify-evenly">
        {buttons.map((item, index) => (
          <button
            key={index}
            className={`${
              active === index && "border-transparent bg-indigo-600 scale-95"
            } w-24 border-gray-200 border rounded-md text-gray-200 px-1 transform duration-200 flex flex-col items-center justify-center text-sm`}
            t
            onClick={() => setActive(index)}
          >
            <item.icon className="h-7 w-7" />
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
