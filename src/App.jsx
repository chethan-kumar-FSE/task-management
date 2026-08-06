import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { TaskManagement } from "./TaskManagement/TaskManagment";

function App() {
  console.log("App.jsx rendered");
  return (
    <>
      <BrowserRouter>
        <TaskManagement />
      </BrowserRouter>
    </>
  );
}

export default App;
