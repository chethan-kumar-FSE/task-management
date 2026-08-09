import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { TaskManagement } from "./TaskManagement/TaskManagment";
import { useEffect } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <TaskManagement />
      </BrowserRouter>
    </>
  );
}

export default App;
