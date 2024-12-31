
export default function Footer () {
    return (
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 fixed-bottom">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a
                  className="hover:underline me-4 md:me-6"
                  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <Image
                    aria-hidden
                    src="/github.svg"
                    alt="github icon"
                    width={16}
                    height={16}
                  /> */}
                  GitHub
                </a>
            </li>
            <li>
                <a
                  className="hover:underline me-4 md:me-6"
                  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <Image
                    aria-hidden
                    src="/Linkedin.svg"
                    alt="Linkedin icon"
                    width={16}
                    height={16}
                  /> */}
                  Linkedin
                </a>
            </li>
            <li>
                <a
                  className="hover:underline me-4 md:me-6"
                  href="https://jose-portifolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <Image
                    aria-hidden
                    src="/globe.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                  /> */}
                  Portifolio
                </a>
            </li>
        </ul>
        </div>
      </footer>
    )
}
