'use client'
import axios from "axios";
import { useState } from "react";

const  BirthdayPage = () => {
  interface ApodData {
    date: string;
    media_type: string;
    service_version: string;
    title: string;
    hdurl: string;
    url: string;
    explanation: string;
  }

  const apod_Url = "https://api.nasa.gov/planetary/apod?api_key=HAg1afM5vE3kMpfbfS8JXD81CJP0fTxWCpshITVR&";

  const [date, setDate] = useState<string>("");
  const [apodData, setApodData] = useState<ApodData[] | null>(null);

  const handlerBirthday = async () => {
    try {
      const response = await axios.get(`${apod_Url}start_date=${date}&end_date=${date}`);
      const data: ApodData[] = response.data;
      setApodData(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="grid bg-white mb-auto dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Olá, seja bem vindo ao APOD!</h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Um dos sites mais populares da NASA é o Astronomy Picture of the Day. Na verdade, este site é um dos sites mais populares em todas as agências federais. Ele tem o apelo popular de um vídeo do Justin Bieber. Este ponto final estrutura as imagens do APOD e os metadados associados para que possam ser reaproveitados para outras aplicações.</p>
              <form className="w-full max-w-md mx-auto">   
                  <label htmlFor="default-date" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Nos diga seu aniversario:</label>
                  <div className="relative">
                      <input type="text" id="default-date" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex: 01-01-1999" onChange={(e) => setDate(e.target.value)}required />
                      <button type="button" className="rounded-md mt-3 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handlerBirthday}>Pesquisar</button>
                  </div>
              </form>
          </div>
          <section>
              {apodData && apodData.map(((data, index) => (
                <div key={index} className="flex flex-col items-center m-8">
                  <h1 className="text-2xl font-bold">{data.title}</h1>
                  <p className="text-base text-gray-500">{data.explanation}</p>
                  <img src={data.url} alt={data.title} />
                </div>
              )))}
            </section>
      </section>
  )
}



export default BirthdayPage;