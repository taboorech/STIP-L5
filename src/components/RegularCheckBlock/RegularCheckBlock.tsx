import { useState } from "react";

const RegularCheckBlock = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<string[]>([]);
  
  const cyrillicRegex = /w[а-яёїієґ]w/gi;

  const handleRegexTest = () => {
    const matches = inputValue.match(cyrillicRegex);
    if (matches) {
      setResult(matches);
    } else {
      setResult(["Нічого не знайдено"]);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Перевірка регулярного виразу</h2>
      <div className="mb-4">
        <label htmlFor="regexInput" className="block text-sm font-medium text-gray-700">
          Введіть рядок для перевірки:
        </label>
        <input
          id="regexInput"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        onClick={handleRegexTest}
        className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
      >
        Перевірити
      </button>
      <div className="mt-4">
        <h3 className="font-medium">Результати:</h3>
        {result.length > 0 && result.map((res, idx) => (
          <div key={idx} className="text-gray-700 mt-2">
            {res}
          </div>
        ))}
      </div>
    </div>
  )
};

export default RegularCheckBlock;