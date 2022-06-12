
import ClassComponentCounter from "./ClassComponentCounter";
import { Counter } from "./Counter";

function App() {
  return (
    <>
        <ClassComponentCounter initialCount = {0}/>

     -------------------

        <Counter initialCount = {3}/>
        </>
  );
}

export default App;
