import Image from "next/image";
import { ListCommentComponent } from ".";

export const ChildComment = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1 p-2 bg-slate-200 bg-opacity-40 rounded-md">
        <div className="flex flex-row gap-2 items-center">
          <div className="relative">
            <Image
              src="/avatar/test.jpg"
              className="rounded-full aspect-square"
              style={{ objectFit: "cover" }}
              width={40}
              height={40}
              alt="photo"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold">Nguyễn hoàng lâm</span>
            <span className="text-xs">abc@gmail.com</span>
          </div>
        </div>

        <div className="pl-2">
          <span className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi
            reiciendis vitae, officia magnam sequi nulla amet ducimus tenetur
            cupiditate odio recusandae inventore saepe ratione expedita
            voluptas, dignissimos, corporis eos.
          </span>
        </div>
      </div>

      <div className="flex flex-col pl-10 gap-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            223/11
          </label>
          <textarea
            id="first_name"
            rows={4}
            style={{
              resize: "none",
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Gui
          </button>
        </div>
      </div>
    </div>
  );
};
