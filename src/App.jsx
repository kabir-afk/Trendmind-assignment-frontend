import { useEffect, useState } from "react";

function App() {
  const [fields, setFields] = useState({
    tone: "Friendly",
    targetAudience: "",
    topic: "",
    length: "short",
  });

  function handleChange(e) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(fields);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            LinkedIn Post Creator
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Generate engaging LinkedIn posts tailored to your audience
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="tone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Tone
              </label>
              <select
                name="tone"
                id="tone"
                value={fields.tone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              >
                <option value="Friendly">Friendly</option>
                <option value="Authoritative">Authoritative</option>
                <option value="Contrarian">Contrarian</option>
                <option value="Analytical">Analytical</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="targetAudience"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Target Audience
              </label>
              <input
                type="text"
                name="targetAudience"
                id="targetAudience"
                value={fields.targetAudience}
                onChange={handleChange}
                placeholder="e.g., Software developers, Marketers, Entrepreneurs"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="topic"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Topic
              </label>
              <input
                type="text"
                name="topic"
                id="topic"
                value={fields.topic}
                onChange={handleChange}
                placeholder="e.g., AI trends, Remote work productivity"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="length"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Length
              </label>
              <select
                name="length"
                id="length"
                value={fields.length}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              >
                <option value="short">Short (100-150 words)</option>
                <option value="medium">Medium (200-300 words)</option>
                <option value="long">Long (400+ words)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Generate Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
