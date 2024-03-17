import { useEffect, useState } from "react";

function C1(){
    const [sayac, setSayac] = useState(0)

    useEffect(()=>{
        const surekliIslem1 = setInterval(() => {
            console.log("Interval çalıştı")
        }, 2000);


        //cleanup function (useeffect icin gecerli)
        //component unmounth oldugunda ya da Re-render (Yeniden render) oncesinde tetiklenir
        return () => {
            clearInterval(surekliIslem1)
            console.log("Interval temizlendi")
        }

    }, [])

    return(
        <>
            <div className="bg-success-subtle p-3">
                C1 komponenti
                <button className="btn btn-sm btn-outline-danger ms-3" onClick={()=>{setSayac(eskiDeger=>eskiDeger+5)}}>{sayac}</button>
            </div>
        </>
    )
}

export default C1;