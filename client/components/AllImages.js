import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImages } from "../store/image";

export const AllImages = () => {
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getImages());
  }, []);

  return (
    <div className="content">
       {images && images.length
        ? images.map((image) => {
            return <img src={image.URL} key={image.URL} />;
          })
        : "No images found"}
    </div>
  );
}

