import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "./ui/button";

const OwnerBehaviorsCommonQuestions = ({ data }: any) => {
  const [checkedStates, setCheckedStates] = useState<Record<string, string[]>>(
    {}
  );

  useEffect(() => {
    // Retrieve saved checked states from local storage
    const savedCheckedStates = JSON.parse(
      localStorage.getItem("checkedStates") || "{}"
    );
    setCheckedStates(savedCheckedStates);
  }, []);

  const handleCheckboxChange = (question: string, answer: string) => {
    setCheckedStates((prevCheckedStates) => {
      const prevAnswers = prevCheckedStates[question] || [];
      const newAnswers = prevAnswers.includes(answer)
        ? prevAnswers.filter((a) => a !== answer)
        : [...prevAnswers, answer];

      return {
        ...prevCheckedStates,
        [question]: newAnswers,
      };
    });
  };

  const handleSaveToLocal = () => {
    toast.success("Successfully Submitted");
    localStorage.setItem("checkedStates", JSON.stringify(checkedStates));
  };

  return (
    <div className="col-span-5">
      <h1 className="text-3xl font-bold mb-8 py-4">
        Owner Behaviors Common Questions
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 pb-2">
        {data?.ownerBehaviourCommonQuestion?.map((item: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <h2 className="text-lg font-medium p-4 border-b">
              {item.question}
            </h2>
            <ul className="p-4">
              {item.answers?.map((answer: any, i: number) => (
                <li key={i} className="flex items-center py-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={
                      checkedStates[item.question]?.includes(answer) || false
                    }
                    onChange={() => handleCheckboxChange(item.question, answer)}
                  />
                  <span className="ml-3 text-gray-700">{answer}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Submit Button */}
      <Button className="py-2" onClick={handleSaveToLocal}>
        Submit
      </Button>
    </div>
  );
};

export default OwnerBehaviorsCommonQuestions;
