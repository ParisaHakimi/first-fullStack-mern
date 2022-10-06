import { useEffect, useState } from "react";
import axios from "axios";

const PersonForm = () => {
  const [message, setMessage] = useState("Loading...");
  useEffect(() => {
    axios.get("http://localhost:8000/api")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log(err));
  }, []);

  return <div>
    <h2>message from the back-end: {message}</h2>
  </div>
};

export default PersonForm;
