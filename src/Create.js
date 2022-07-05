import { useState } from "react";
//*********************** */
//takes user input
//***************************** */
const Create = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="create">
      <h2>Add a New Job</h2>
      <form>
        <label>TITLE:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Company:</label>
        <input
          type="text"
          required
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <label>Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <button>Add</button>
      </form>
    </div>
  );
};

export default Create;
