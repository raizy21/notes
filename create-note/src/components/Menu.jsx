import { useState } from "react"; //importing useState from react

//  defining Menu
function Menu({ setSelectedCategory }) {
  const [selectedMenuItem, setSelectedMenuItem] = useState("All"); //   using useState to set selectedMenuItem to "All"

  //  defining handleSelect
  const handleSelect = (category) => {
    setSelectedMenuItem(category);
    setSelectedCategory(category);
  };

  // console.log(selectedMenuItem);

  return (
    <div className="ml-4">
      <ul className="menu menu-horizontal p-2 gap-1 rounded-lg">
        {["All", "Personal", "Work", "Study", "Inspiration"].map((category) => (
          <li key={category}>
            <a
              onClick={() => handleSelect(category)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedMenuItem === category
                  ? "bg-indigo-500 hover:bg-indigo-500 text-gray-700 font-bold"
                  : "hover:bg-indigo-400 hover:text-gray-700"
              }`}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

//  exporting Menu
export default Menu;
