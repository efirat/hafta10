import { useEffect, useState } from "react";
import C1 from "./C1";

function App() {
  const [c1Kapali, c1AcKapa] = useState(false);

  function c1Kapat(){
    c1AcKapa(eskiDeger => !eskiDeger);
  }

  const [sayac, sayacGuncelle] = useState(0)
    
  useEffect(()=>{
      console.log("C1 render oldu")
  },[sayac])

  
  return (
    <>
      <div className="container my-5 bg-info-subtle p-5">
        <button onClick={c1Kapat} className="btn btn-warning btn-sm my-3">C1 {c1Kapali ? "AÇ" : "KAPAT"}</button>
        {
          //c1Kapali ? <C1 /> : ""
          !c1Kapali && <C1 sayacGuncelle={sayacGuncelle} sayac={sayac} />
        }
      </div>
    </>

  );
}

export default App;
