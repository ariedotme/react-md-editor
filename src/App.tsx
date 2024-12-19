import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function getDefaultMode() {
  const savedMode = localStorage.getItem("mode");
  return savedMode ? savedMode : "light";
}

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>(
    "# Hello\n| Hello | World |\n |-------|--------|\n | Hello? | World! |\n | Hello! | World? |\n| He | llo |\n | Wo | rld |"
  );

  const [mode, setMode] = useState(getDefaultMode());

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <header className="bg-blue-600 dark:bg-violet-700 text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Markdown Editor</h1>

        <button
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          className="h-12 w-12 p-2 bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 shadow-brutalist"
        >
          {mode === "dark" && (
            <svg
              className="fill-gray-200 block"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          )}
          {mode === "light" && (
            <svg
              className="fill-yellow-500 block"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          )}
        </button>
      </header>

      <div className="flex flex-1 bg-gray-100 dark:bg-gray-900">
        <textarea
          className="w-1/2 p-4 resize-none bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />

        <div className="w-1/2 p-4 bg-gray-100 dark:bg-gray-900 overflow-auto prose prose-blue dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default App;
