
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component.js";
import ExercisesList from "./components/exercises-list.component";
import EditExercises from "./components/edit-exercises.component";
import CreateExercises from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (

    <Router>
      <Navbar />
      <Route path= "/" exact component = {ExercisesList} />
      <Route path= "/edit/:id" exact component = {EditExercises} />
      <Route path= "/create" exact component = {CreateExercises} />
      <Route path= "/user" exact component = {CreateUser} />
       <div className="container">
      Hello World
    </div>
    </Router>
   
  );
}

export default App;
