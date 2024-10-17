import React, { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        if (!response.ok) {
          console.log("Xatolik");

          setLoading(false);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);

        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FadeLoader />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-5 ml-20">
      <ul className="flex flex-wrap gap-5 mx-auto">
        {data.map((photo) => (
          <li key={photo.id} className="w-60">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
