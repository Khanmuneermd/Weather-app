import { LiaBarsSolid } from "react-icons/lia";

export default function Navbar() {
    // the function to handle the dropdown
    const dropHandler = () => {
        let navList = document.querySelector('.nav-list');
        navList.classList.toggle('hidden')
    }
    return (
        // simple navigation bar that is also responsive
        <div className="flex bg-midnight">
            <div className="flex w-full h-auto justify-between py-3 lg:screen-max-width lg:justify-between lg:items-center lg:mx-auto transition-all duration-700">
                <div className="logo">
                    <li className="list-none text-white ml-2 font-semibold justify-center items-center flex">Weather App</li>
                </div>
                <div className="nav-list hidden text-white mx-auto lg:flex">
                    <nav className="flex flex-col text-md font-semibold justify-center items-center lg:flex lg:flex-row md:space-x-6">
                        <li className="list-none">Home</li>
                        <li className="list-none">About this App</li>
                        <li className="list-none">Usage Details</li>
                    </nav>
                </div>
                <div className="toggle-btn mr-3 mt-1 flex relative right-2 md:hidden">
                    <button onClick={dropHandler}>
                        <LiaBarsSolid className="text-white text-xl" />
                    </button>
                </div>
            </div>

        </div>
    )
}
