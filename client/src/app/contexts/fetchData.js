import getTodos from "../../api/getTodos";

export default function fetchData(setBackendDataCallback) {   

    getTodos()
      .then((data) => {
        if (data) {
            setBackendDataCallback(data);
        } else {
          console.error("Empty or invalid JSON data received");
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
}