import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
