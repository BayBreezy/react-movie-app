import { Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { searchMovie } from "../api/movies";
import { useConfigContext } from "../context/ConfigContext";
import { IMovie } from "../types";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export const SearchModal = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<IMovie[]>([]);
  const config = useConfigContext();

  const sendSearch = async (value: any) => {
    let term = value.target.value;
    const res = await searchMovie(term);
    setResults(res as any);
  };

  function closeModal() {
    setIsOpen(false);
    setResults([]);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="flex justify-start items-center space-x-2 px-4 rounded-full py-2.5 text-gray-400 hover:text-gray-500 transition duration-300 md:border border-gray-200 hover:border-gray-600"
      >
        <MagnifyingGlassIcon className="w-5 h-5" />
        <span className="text-sm hidden md:inline-block">Search for a movie or tv show...</span>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <label className="sr-only" htmlFor="search">
                    Search for a movie by typing the name
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-full border border-gray-300 outline-none focus:ring focus:ring-primary/20"
                    placeholder="Search for a movie..."
                    type="search"
                    name="search"
                    id="search"
                    onInput={(e) => sendSearch(e)}
                  />

                  <div className="mt-4">
                    <small>Results</small>
                    <ul className="mt-5 space-y-3">
                      {results.map((m) => (
                        <Link
                          onClick={closeModal}
                          key={m.id}
                          to={`${m.id}`}
                          className="flex items-start space-x-3"
                        >
                          <img
                            src={`${config?.poster}${m.poster_path}`}
                            alt={`${m.title}`}
                            className="object-cover w-20 h-20 rounded-md "
                          />
                          <div>
                            <h1 className="font-semibold">{m.title}</h1>
                            <p className="font-light text-sm">
                              Reales date: {dayjs(m.release_date).format("MMM DD, YYYY")}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
