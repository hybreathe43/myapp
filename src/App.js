import './App.css';
import { useSelector,useDispatch } from 'react-redux';

import {incnum,dec} from "./action";

function App() {
  const state=useSelector((state)=>state.changenumber);
  const dispatch=useDispatch();
  return (
    <div className="App">
     <a
      name=""
      id=""
      class="btn btn-primary"
      href="#"
      role="button"
      onClick={()=>dispatch(incnum())}
      >+</a>
        <input
          type="text"
          class="form-control"
          name=""
          id=""
          aria-describedby="helpId"
          value={state}
        />
      
     <a
      name=""
      id=""
      class="btn btn-primary"
      href="#"
      role="button"
      onClick={()=>dispatch(dec(5))}
      >-</a>
     
    </div>
  );
}

export default App;
