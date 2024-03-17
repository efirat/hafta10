import { useEffect } from "react";

function C1({sayac, sayacGuncelle}){

    useEffect(()=>{
        console.log("C1 render oldu")
    },[sayac])

    return(
        <>
            <div className="bg-success-subtle p-3">
                Ben C1 komponentiyim...

                <button onClick={()=>{sayacGuncelle(eskiDeger=>eskiDeger+1)}} className="btn btn-sm btn-outline-danger mx-3">{sayac}</button>
            </div>

        </>
    )
}

export default C1;