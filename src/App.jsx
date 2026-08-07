import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { TaskManagement } from "./TaskManagement/TaskManagment";

function App() {
  console.log("App.jsx renderedvasdasd");
  console.log("done")
  return (
    <>
      <BrowserRouter>
        <TaskManagement />
      </BrowserRouter>
    </>
  );
}

export default App;
