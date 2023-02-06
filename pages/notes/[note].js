import React from "react";
import { useRouter} from "next/router";
import { useState } from "react";

const Note = () => {
  const router = useRouter();
  const { note } = router.query;
  const data = JSON.parse(note)
  const [title, setTitle] = useState(data.title)
  const [desc, setDesc] = useState(data.desc)
  
  const editData = () => {
    const noteData = {title, desc}
    const keys = Object.keys(localStorage);
    const val = Object.values(localStorage);
    const dataKey = keys.filter((key) => key.includes("userNote"));
    const identity = val.indexOf(note) - 1
    
    localStorage.setItem(dataKey[identity], JSON.stringify(noteData))
    router.push("/")
  };
  return (
    <div
      id="authentication-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="justify-center items-center z-50 w-full p-4 md:inset-0 h-modal md:h-full"
    >
      <div className="relative w-full h-full max-w-sm md:h-auto">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Edit note Box
            </h3>
            <form className="space-y-6" onSubmit={editData}>
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={title}
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="desc"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  rows={3}
                  type="text"
                  name="desc"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  id="desc"
                  placeholder={desc}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required=""
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Edit note
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
