import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { TaskManagement } from "./TaskManagement/TaskManagment";
import { useEffect } from "react";

function App() {
  console.log("App.jsx renderedvasdasd");
  console.log("done");
  console.log("done");

  useEffect(() => {
    const fetchCall = async () => {
      try {
        const response = await fetch("http://13.203.210.54/user");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCall();
  }, []);
  return (
    <>
      <BrowserRouter>
        <TaskManagement />
      </BrowserRouter>
    </>
  );
}

export default App;
