// import { useEffect, useState } from "react";
// import { FaSun, FaMoon } from "react-icons/fa";

// function ThemeToggle() {
//     // Initialize state with the value from localStorage, defaulting to false if not found
//     const [darkMode, setDarkMode] = useState(() => {
//         const savedTheme = localStorage.getItem("theme");
//         return savedTheme === "dark";
//     });

//     useEffect(() => {
//         const root = window.document.documentElement;
//         if (darkMode) {
//             root.classList.add('dark');
//             root.classList.remove('light');
//         } else {
//             root.classList.add('light');
//             root.classList.remove('dark');
//         }
//         // Save the theme preference to localStorage
//         localStorage.setItem("theme", darkMode ? "dark" : "light");
//     }, [darkMode]);

//     return (
//         <div className="mr-10">
//             <button
//                 className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-2 rounded-md flex items-center"
//                 onClick={() => setDarkMode(prevMode => !prevMode)}
//             >
//                 {darkMode ? (
//                     <FaSun className="mr-2" />
//                 ) : (
//                     <FaMoon className="mr-2" />
//                 )}
//                 <span>Toggle Theme</span>
//             </button>
//         </div>
//     );
// }

// export default ThemeToggle;


import { useEffect, useState } from "react";

function ThemeToggle() {
    // Initialize state with the value from localStorage, defaulting to false if not found
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark";
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.add('light');
            root.classList.remove('dark');
        }
        // Save the theme preference to localStorage
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <div className="mr-10">
            <label className="inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(prevMode => !prevMode)}
                    className="sr-only"
                />
                <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 flex items-center">
                    <div
                        className={`bg-white dark:bg-gray-500 h-4 w-4 rounded-full transform transition-transform duration-300 ${
                            darkMode ? 'translate-x-5' : ''
                        }`}
                    />
                </div>
                <span className="ml-3 text-gray-800 dark:text-white">
                    {darkMode ? 'Dark Mode' : 'Light Mode'}
                </span>
            </label>
        </div>
    );
}

export default ThemeToggle;
