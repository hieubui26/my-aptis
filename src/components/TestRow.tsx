import React from "react";
import { useRouter } from "next/router";

interface TestRowProps {
  testName: string;
  colors: { color: string; module: string }[];
  testIndex: number;
}

const TestRow: React.FC<TestRowProps> = ({ testName, colors, testIndex }) => {
  const router = useRouter();

  const handleTakeTest = (module: string) => {
    if (module === "grammar") {
      router.push(`/exam/grammar${testIndex}`);
    } else {
      router.push(`/not-available`);
    }
  };

  return (
    <tr>
      <td className="border px-4 py-4">{testName}</td>
      {colors.map((module, index) => (
        <td key={index} className={`border px-4 py-4 ${module.color}`}>
          <button
            className="flex items-center justify-center space-x-2"
            onClick={() => handleTakeTest(module.module)}
          >
            <span>Take Test</span>
          </button>
        </td>
      ))}
    </tr>
  );
};

export default TestRow;
