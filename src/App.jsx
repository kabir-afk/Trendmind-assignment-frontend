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
  // useEffect(() => {
  //   console.log(fields);
  // }, [fields]);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(fields);
  }
  return (
    <div>
      <h1>LinkedIn Post Creator</h1>
      <form className="border-2 flex flex-col" onSubmit={handleSubmit}>
        <select
          name="tone"
          id="tone"
          value={fields.tone}
          onChange={(e) => handleChange(e)}
        >
          <option value="Friendly">Friendly</option>
          <option value="Authoritative">Authoritative</option>
          <option value="Contrarian">Contrarian</option>
          <option value="Analytical">Analytical</option>
        </select>
        <label htmlFor="targetAudience">
          Target audience
          <input
            type="text"
            name="targetAudience"
            id="targetAudience"
            value={fields.targetAudience}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="topic">
          Topic
          <input
            type="text"
            name="topic"
            id="topic"
            value={fields.topic}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <select
          name="length"
          id="length"
          value={fields.length}
          onChange={(e) => handleChange(e)}
        >
          Length
          <option value="short">Short(100-150 words)</option>
          <option value="medium">Medium(200-300 words)</option>
          <option value="long">Long(400+)</option>
        </select>
        <button
          type="submit"
          className="cursor-pointer"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
