import { FC, useState } from "react";

const QuizPage: FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const question = "Berapa hasil dari 5 + 3?";
  const options = [
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
  ];

  const correctAnswer = "8";

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="mb-16 min-h-screen flex flex-col items-center justify-center p-4 bg-primary">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">{question}</h1>
        <form>
          {options.map((option) => (
            <div key={option.value} className="lg:mb-2">
              <input
                type="radio"
                id={option.value}
                name="answer"
                value={option.value}
                checked={selectedAnswer === option.value}
                onChange={handleAnswerChange}
                className="mr-2"
              />
              <label htmlFor={option.value} className="text-lg">
                {option.label}
              </label>
            </div>
          ))}
        </form>
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-tertiary text-secondary rounded hover:bg-secondary hover:text-tertiary"
        >
          Submit
        </button>
        {isSubmitted && (
          <div className="mt-4 text-lg">
            {selectedAnswer === correctAnswer
              ? "Jawaban Anda benar!"
              : "Jawaban Anda salah, coba lagi!"}
          </div>
        )}
      </div>
    </div>
  );
};

export { QuizPage };
