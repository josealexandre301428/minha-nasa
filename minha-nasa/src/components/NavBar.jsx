'use client'


export default function NavBar () {


    return (
        <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex">
                <img src="https://www.nasa.gov/wp-content/uploads/2023/04/nasa-logo-web-rgb.png" className="h-8" alt="NASA Logo" />
                <span className="self-center text-2xl font-normal whitespace-nowrap dark:text-white">NASA</span>
            </div>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <a href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="/images/birthday" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Foto do dia</a>
                    </li>
                    <li>
                        <a href="/images/earth" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Terra</a>     
                    </li>
                </ul>
            </div>
        </nav>
    )
}