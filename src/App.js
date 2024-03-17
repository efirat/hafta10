import { useState } from "react";
import C1 from "./C1";

function App() {
  const [c1Kapali, c1AcKapa] = useState(false);
  
  return (
    <>
      <div className="container my-5">
        <button onClick={()=>{c1AcKapa(eskiDeger => !eskiDeger)}} className="btn btn-sm btn-success mb-3">C1 {c1Kapali ? "AÇ" : "KAPAT"}</button>
        {
          !c1Kapali && <C1 />
        }
      </div>
    </>

  );
}

export default App;
