import React, { useState, useEffect, useRef } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const questions = [
  {
    id: 1,
    question: "I _______ drunk three cups of coffee this morning",
    options: ["Have", "Am", "Are"],
    isExample: true,
  },
  {
    id: 2,
    question: "We'll go to the beach _______ it rains tomorrow.",
    options: ["but", "if", "unless"],
  },
  {
    id: 3,
    question: "This is an example of question 3.",
    options: ["option1", "option2", "option3"],
  },
];

const StartTestPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  );

  const [timeLeft, setTimeLeft] = useState(1500);
  const startTimeRef = useRef(Date.now());

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return {
      minutes: minutes,
      seconds: seconds < 10 ? `0${seconds}` : seconds,
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsedTime = Math.floor(
        (Date.now() - startTimeRef.current) / 1000
      );
      const newTimeLeft = 1500 - elapsedTime;
      if (newTimeLeft >= 0) {
        setTimeLeft(newTimeLeft);
      } else {
        clearInterval(interval);
        alert("Time's up! Submitting the test...");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { minutes, seconds } = formatTime(timeLeft);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 1) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswerChange = (index, answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = answer;
    setUserAnswers(updatedAnswers);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow-md p-4 flex justify-between items-center border-b-4 border-red-500">
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-3xl font-bold leading-tight">
              {minutes} : {seconds}
            </div>
            <div className="text-sm flex justify-between">
              <span className="mr-2">Mins</span>
              <span>Secs</span>
            </div>
          </div>
          <h1 className="text-2xl font-semibold text-red-500">AptisWeb</h1>
          <div className="text-lg font-semibold">Grammar & Vocabulary</div>
        </div>
        <div className="text-lg font-semibold">
          Question <strong>{currentQuestionIndex}</strong> of 30{" "}
        </div>
      </header>

      <main className="flex-grow pt-10 px-4">
        <div className="p-8 rounded-md w-full max-w-4xl mx-auto">
          {currentQuestionIndex === 1 && (
            <div>
              <p>
                <strong>Example:</strong> {questions[0].question}
              </p>
              <div className="mt-4">
                {questions[0].options.map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center space-x-4 p-2 rounded-md`}
                  >
                    <input
                      type="radio"
                      name="example"
                      defaultChecked={option === "Have"}
                      disabled
                      className="h-6 w-6 accent-blue-600"
                    />
                    <span
                      className={`ml-4 text-lg ${
                        option === "Have" ? "text-blue-600" : ""
                      }`}
                    >
                      {option}
                    </span>
                  </label>
                ))}
              </div>

              <div className="mt-6">
                <p>{questions[1].question}</p>
                <div className="mt-4">
                  {questions[1].options.map((option, index) => (
                    <label
                      key={index}
                      className="flex items-center space-x-4 p-2"
                    >
                      <input
                        type="radio"
                        name={`question1`}
                        value={option}
                        checked={userAnswers[1] === option}
                        onChange={() => handleAnswerChange(1, option)}
                        className="h-6 w-6 accent-blue-600"
                      />
                      <span className="ml-4 text-lg">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentQuestionIndex > 1 && (
            <div>
              <p>{questions[currentQuestionIndex].question}</p>
              <div className="mt-4">
                {questions[currentQuestionIndex].options.map(
                  (option, index) => (
                    <label
                      key={index}
                      className="flex items-center space-x-4 p-2"
                    >
                      <input
                        type="radio"
                        name={`question${currentQuestionIndex}`}
                        value={option}
                        checked={userAnswers[currentQuestionIndex] === option}
                        onChange={() =>
                          handleAnswerChange(currentQuestionIndex, option)
                        }
                        className="h-6 w-6 accent-blue-600"
                      />
                      <span className="ml-4 text-lg">{option}</span>
                    </label>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gray-200 flex justify-between space-x-4">
        {currentQuestionIndex > 1 && (
          <button
            className="bg-lime-300 text-black py-4 px-4 rounded-md shadow-lg flex items-center"
            onClick={handleBack}
          >
            <ArrowBackIcon className="mr-2" />
            Back
          </button>
        )}
        {currentQuestionIndex < questions.length - 1 && (
          <button
            className="bg-lime-300 text-black py-4 px-4 rounded-md shadow-lg ml-auto flex items-center"
            onClick={handleNext}
          >
            Next
            <ArrowForwardIcon className="ml-2" />
          </button>
        )}
      </footer>
    </div>
  );
};

export default StartTestPage;
