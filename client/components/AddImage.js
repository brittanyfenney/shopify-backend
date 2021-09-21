import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../store";

export const AddImage = () => {
  const [url, setUrl] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const data = {
      url
    }
    dispatch(addImage(data))
  }

  return (
    <div className="content">
      <div className="form">
       <p>Submit an image URL to add it to the repository.</p>
       <form onSubmit={handleSubmit}>
         <input type="url"
         placeholder="Please enter image URL."
         name="url"
         value={url}
         onChange={e => setUrl(e.target.value)}
         />
         <br />
         <button type="submit">Submit</button>
       </form>
       </div>
    </div>
  );
}
