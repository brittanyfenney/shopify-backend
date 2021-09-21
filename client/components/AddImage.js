import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../store";
import { useHistory } from "react-router";

export const AddImage = (props) => {
  const [URL, setURL] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      URL,
    };
    console.log("submitting ===> ", data);
    dispatch(addImage(data));
    history.push("/images");
  };

  return (
    <div className="content">
      <div className="form">
        <p>Submit an image URL to add it to the repository.</p>
        <p>To test it out, try: https://picsum.photos/200</p>
        <form onSubmit={handleSubmit}>
          <input
            type="url"
            placeholder="Please enter image URL."
            name="url"
            value={URL}
            onChange={(e) => setURL(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
