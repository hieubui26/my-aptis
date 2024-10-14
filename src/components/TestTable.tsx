import React from "react";
import GrammarIcon from "@mui/icons-material/MenuBook";
import ListeningIcon from "@mui/icons-material/Headphones";
import WritingIcon from "@mui/icons-material/Edit";
import ReadingIcon from "@mui/icons-material/LibraryBooks";
import SpeakingIcon from "@mui/icons-material/Mic";
import TestRow from "./TestRow";

const TestTable = () => {
  const tests = [
    {
      name: "Practice test 1",
      colors: [
        { color: "bg-lime-200", module: "grammar" },
        { color: "bg-blue-500", module: "listening" },
        { color: "bg-green-800", module: "writing" },
        { color: "bg-orange-500", module: "reading" },
        { color: "bg-rose-500", module: "speaking" },
      ],
    },
    {
      name: "Practice test 2",
      colors: [
        { color: "bg-lime-200", module: "grammar" },
        { color: "bg-blue-500", module: "listening" },
        { color: "bg-green-800", module: "writing" },
        { color: "bg-orange-500", module: "reading" },
        { color: "bg-rose-500", module: "speaking" },
      ],
    },
    {
      name: "Practice test 3",
      colors: [
        { color: "bg-lime-200", module: "grammar" },
        { color: "bg-blue-500", module: "listening" },
        { color: "bg-green-800", module: "writing" },
        { color: "bg-orange-500", module: "reading" },
        { color: "bg-rose-500", module: "speaking" },
      ],
    },
    {
      name: "Practice test 4",
      colors: [
        { color: "bg-lime-200", module: "grammar" },
        { color: "bg-blue-500", module: "listening" },
        { color: "bg-green-800", module: "writing" },
        { color: "bg-orange-500", module: "reading" },
        { color: "bg-rose-500", module: "speaking" },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-semibold mb-4">APTIS GENERAL</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-center border-collapse border border-gray-200 shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Practice Modules</th>
              <th className="px-4 py-2">
                <div className="flex items-center justify-center space-x-2">
                  <GrammarIcon className="text-green-600" />
                  <span>Grammar</span>
                </div>
              </th>
              <th className="px-4 py-2">
                <div className="flex items-center justify-center space-x-2">
                  <ListeningIcon className="text-blue-600" />
                  <span>Listening</span>
                </div>
              </th>
              <th className="px-4 py-2">
                <div className="flex items-center justify-center space-x-2">
                  <WritingIcon className="text-green-800" />
                  <span>Writing</span>
                </div>
              </th>
              <th className="px-4 py-2">
                <div className="flex items-center justify-center space-x-2">
                  <ReadingIcon className="text-orange-600" />
                  <span>Reading</span>
                </div>
              </th>
              <th className="px-4 py-2">
                <div className="flex items-center justify-center space-x-2">
                  <SpeakingIcon className="text-red-600" />
                  <span>Speaking</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tests.map((test, index) => (
              <TestRow
                key={index}
                testName={test.name}
                colors={test.colors}
                testIndex={index + 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestTable;
