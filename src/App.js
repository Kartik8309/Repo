import { useState } from "react";
import FormContainer from "./components/FormContainer";

const App = () => {
  const [name,setName] = useState("");

  const getName = (val) => {
    setName(val);
    console.log(name);
    //error here
  }

  return (
    <div>
        <FormContainer getName = { getName } />
    </div>
  );
}

export default App;
