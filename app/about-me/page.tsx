import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { techSkill } from "./tech-skill.mock";

export default function AboutMePage() {
  return (
    <main className="flex flex-col">
      <header
        className="bg-slate-100"
        style={{
          backgroundImage: 'url("/background/OIG (2).jfif")',
          backgroundBlendMode: "multiply",
          height: "100vh",
          width: "100vw",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            top: "10px",
            left: "10px",
            alignItems: "center",
          }}
        >
          <div
            className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] "
            style={{ position: "relative" }}
          >
            <Image
              src="/logo/logo.png"
              fill
              sizes="100vw"
              alt="logo"
              style={{ filter: "drop-shadow(5px 5px 5px #222)" }}
            />
          </div>
          {/* -------- */}

          {/* -------------- */}
        </div>
        {/* ------------------- */}
        <div
          className="bottom-5 w-[400px] sm:w-[500px] md:w-[580px]"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%)",
            left: "10px",
            backgroundColor: "#00000040",
            boxShadow: "5px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(2.5px)",
            height: "fit-content",
            padding: "40px 20px",
            borderRadius: "10px",
          }}
        >
          <span
            className="text-lg sm:text-2xl md:text-3xl"
            style={{
              fontStyle: "italic",
              background:
                "linear-gradient(149deg, rgba(39, 174, 96, 0.80) 0%, rgba(236, 180, 182, 0.80) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Code your way to the future
            <br />
            with passion and perseverance !
          </span>
        </div>
        {/* ------------- */}
        <Image
          src="/svg/code-think.svg"
          className="hidden md:block"
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            filter: "drop-shadow(5px 5px 5px #222)",
          }}
          width={200}
          height={100}
          sizes="100vw"
          alt="code-think"
        />
      </header>
      {/* ----------- */}
      <section className="flex flex-col gap-2 px-2 py-4 w-full">
        <p className="text-center font-semibold text-xl w-full">Work cycle</p>
        <div className="flex flex-row  justify-around w-full">
          <div className="flex flex-col items-center gap-2">
            <Image
              className="shadow-xl p-2 rounded-md border-2 border-solid border-slate-600 "
              src="/svg/developer.svg"
              width={200}
              height={200}
              alt="photo"
            />
            <span className="font-semibold">Working</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Image
              className="shadow-xl p-2 rounded-md border-2 border-solid border-slate-600 "
              src="/svg/read-book.svg"
              width={200}
              height={200}
              alt="photo"
            />
            <span>Upgrare</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Image
              className="shadow-xl p-2 rounded-md border-2 border-solid border-slate-600 "
              src="/svg/relax.svg"
              width={200}
              height={200}
              alt="photo"
            />
            <span>Relax</span>
          </div>
        </div>
      </section>
      {/* ------------- */}
      <section className="flex flex-col gap-2 px-4 py-4 w-full bg-slate-200 items-center">
        <p className="text-center font-semibold text-xl w-full">
          Techicel skill
        </p>

        <div
          className="flex flex-row flex-wrap w-4/5 p-10 rounded-lg gap-10"
          style={{ flex: 1 }}
        >
          {techSkill.map((skill) => {
            return (
              <div
                key={skill.text}
                className="flex flex-row gap-4 px-6 py-2 bg-slate-800 rounded-lg items-center w-40"
                style={{
                  borderRadius: "1px solid black",
                  height: "fit-content",
                }}
              >
                <Image
                  src={skill.image}
                  className="hover:scale-110 transition-transform cursor-pointer"
                  width={30}
                  height={30}
                  style={{
                    objectFit: "cover",
                  }}
                  alt="react-icon"
                />

                <span className="text-sm font-semibold text-slate-200">
                  {skill.text}
                </span>
              </div>
            );
          })}
        </div>
      </section>
      {/* -----------== */}
      <section className="flex flex-col p-4 gap-4">
        <p className="text-xl font-semibold text-center">contact me</p>
        <div className="flex flex-row">
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="/svg/contact.svg"
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
              alt="contact"
            />
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tiêu đề
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>

              <div className=" bg-white rounded-t-lg dark:bg-gray-800">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nội dung
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  style={{ resize: "none" }}
                  placeholder="Write your thoughts here..."
                />
              </div>

              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                style={{
                  width: "fit-content",
                }}
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
    </main>
  );
}
