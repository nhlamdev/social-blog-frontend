import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export const ContactComponent = () => {
  return (
    <section
      className="flex flex-col p-4 md:p-8 gap-4 bg-amber-100 rounded-md
      shadow-lg bg-opacity-20 backdrop-blur-md"
    >
      <h2
        className="text-center font-semibold text-slate-900
          text-xl sm:text-2xl md:text-2xl dark:text-slate-100"
      >
        Liên hệ
      </h2>

      <div className="flex flex-row gap-20 w-full ">
        <picture
          className="justify-center items-center w-3/12 
           hidden md:flex"
        >
          <img
            src="/svg/contact.svg"
            className=" h-full aspect-square"
            alt="contact"
          />
        </picture>

        <div className="flex flex-col gap-2 w-full md:w-9/12">
          <div className=" flex-col gap-4 w-full flex">
            <div>
              <label
                htmlFor="contact_title"
                className="block mb-2 text-md font-medium
                text-gray-900 dark:text-slate-100"
              >
                Tiêu đề
              </label>
              <input
                type="text"
                id="contact_title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tiêu đề"
                required
              />
            </div>

            <div>
              <label
                htmlFor="contact_body"
                className="block mb-2 text-md font-medium 
                text-gray-900 dark:text-slate-100"
              >
                Nội dung
              </label>
              <textarea
                id="contact_body"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
                border border-gray-300 focus:ring-blue-500 focus:border-blue-500 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                style={{ resize: "none" }}
                placeholder="Mô tả nội dung"
              />
            </div>

            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
              hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 
              dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg 
              dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 
              text-center mr-2 mb-2 w-fit ml-auto"
            >
              Gửi
            </button>
          </div>
          <div className="flex flex-row w-full gap-4 justify-center">
            <BsFacebook
              style={{ fontSize: "30px" }}
              className="text-sky-500 cursor-pointer transition-transform hover:scale-110 hover:shadow-lg"
            />
            <AiFillGoogleCircle
              style={{ fontSize: "30px" }}
              className="text-red-500 cursor-pointer transition-transform hover:scale-110 hover:shadow-lg"
            />
            <AiFillGithub
              style={{ fontSize: "30px" }}
              className="text-slate-500-500 cursor-pointer transition-transform hover:scale-110 hover:shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
