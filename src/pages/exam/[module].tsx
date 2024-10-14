import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { MdTimer } from "react-icons/md";
import { useRouter } from "next/router";

const ExamPage = () => {
  const router = useRouter();

  const handleStartTest = () => {
    router.push("/exam/start");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow-md p-4 flex justify-between items-center border-b-4 border-red-500">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold text-red-500">AptisWeb</h1>
        </div>
        <div className="text-lg font-semibold flex items-center">
          Introduction 1 of 1
        </div>
      </header>

      <main className="flex-grow pt-10">
        <div className="p-8 rounded-md w-full mt-0 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-left">
            Welcome to Simulated Aptis Grammar & Vocabulary Test
          </h2>
          <p className="mb-4 flex items-center text-left">
            <GiBookCover className="mr-2 text-xl text-blue-600" />
            The test consists of two sections:
          </p>
          <p className="mb-2 flex items-center text-left">
            <strong>Grammar:</strong>&nbsp;25 questions
          </p>
          <p className="mb-2 flex items-center text-left">
            <strong>Vocabulary:</strong>&nbsp;25 questions
          </p>
          <p className="mb-2 flex items-center text-left">
            <MdTimer className="mr-2 text-xl text-red-500" />
            <strong>Total Time:</strong>&nbsp;25 minutes
          </p>
          <p className="mt-6 text-left">
            When you click on the start button, the test will begin.
          </p>
        </div>
      </main>

      <footer className="bg-gray-200 p-0 flex justify-end">
        <button
          className="bg-lime-300 text-black py-4 px-6 rounded-md shadow-lg hover:bg-lime-400 flex items-center"
          onClick={handleStartTest}
        >
          Start
          <FaArrowRight className="ml-2" />
        </button>
      </footer>
    </div>
  );
};

export default ExamPage;
