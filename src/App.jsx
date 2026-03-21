import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { TaskManagement } from "./TaskManagement/TaskManagment";

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
