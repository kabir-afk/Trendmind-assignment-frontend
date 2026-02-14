import axios from "axios";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [post, setPost] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyLoading, setCopyLoading] = useState(false);
  const [__copyError, setCopyError] = useState("");
  const [fields, setFields] = useState({
    tone: "Friendly",
    targetAudience: "",
    topic: "",
    length: "short",
  });

  function handleChange(e) {
    setFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const isFormValid =
    fields.targetAudience.trim() !== "" && fields.topic.trim() !== "";
  async function copyText() {
    if (!post) return;

    try {
      setCopyLoading(true);
      setCopyError("");
      setCopied(false);

      if (!navigator.clipboard) {
        throw new Error("Clipboard not supported");
      }

      await navigator.clipboard.writeText(post);

      setCopied(true);

      // Auto reset success state
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      setCopyError("Failed to copy. Try manually.");
    } finally {
      setCopyLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isFormValid) return;

    try {
      setLoading(true);
      setError("");
      setPost("");

      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/generate",
        fields,
      );

      setPost(response.data);
    } catch (err) {
      setError(
        err?.response?.data?.message || "Something went wrong. Try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            LinkedIn Post Creator
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Generate engaging LinkedIn posts tailored to your audience
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tone
              </label>
              <select
                name="tone"
                value={fields.tone}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition disabled:bg-gray-100"
              >
                <option value="Friendly">Friendly</option>
                <option value="Authoritative">Authoritative</option>
                <option value="Contrarian">Contrarian</option>
                <option value="Analytical">Analytical</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Audience
              </label>
              <input
                type="text"
                name="targetAudience"
                value={fields.targetAudience}
                onChange={handleChange}
                placeholder="e.g., Software developers, Marketers, Entrepreneurs"
                disabled={loading}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Topic
              </label>
              <input
                type="text"
                name="topic"
                value={fields.topic}
                onChange={handleChange}
                placeholder="e.g., AI trends, Remote work productivity"
                disabled={loading}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Length
              </label>
              <select
                name="length"
                value={fields.length}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition disabled:bg-gray-100"
              >
                <option value="short">Short (100-150 words)</option>
                <option value="medium">Medium (200-300 words)</option>
                <option value="long">Long (400+ words)</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`w-full font-semibold py-3 px-6 rounded-lg transition duration-200 
                ${
                  !isFormValid || loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] text-white"
                }`}
            >
              {loading ? "Generating..." : "Generate Post"}
            </button>
          </form>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg shadow">
            {error}
          </div>
        )}

        {post && (
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="w-full flex justify-between">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Generated Post
              </h2>
              <button
                onClick={copyText}
                disabled={copyLoading}
                className={`p-2 rounded-md transition ${
                  copyLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                <img
                  src={
                    copyLoading
                      ? "/pending.svg"
                      : copied
                        ? "/check.svg"
                        : "/copy.svg"
                  }
                  alt="copy-status"
                />
              </button>
            </div>
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {post}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
