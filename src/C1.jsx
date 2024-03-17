import { useEffect, useState } from "react";

function C1(){
    const [sayac, setSayac] = useState(0)
    const [baglanti, setBaglanti] = useState(navigator.onLine)

    useEffect(()=>{
        function pencereDegisti(e){
            const yatayMi = (e.target.innerWidth / e.target.innerHeight) > 1 ? true : false
            //console.log(e.target.innerWidth)
            console.log(yatayMi + "Pencere ölçüleri değişti..")
        }

        window.addEventListener("resize", pencereDegisti)

        return ()=>{
            window.removeEventListener("resize", pencereDegisti)
        }
    }, [])

    useEffect(()=>{
        const surekliIlsem = setInterval(() => {
            setBaglanti(navigator.onLine)
        }, 1000);

        return () =>{
            clearInterval(surekliIlsem);
        }
    },[])

    return(
        <>
            <div className="bg-success-subtle p-3">
                C1 komponenti
                <button className="btn btn-sm btn-outline-danger ms-3" onClick={()=>{setSayac(eskiDeger=>eskiDeger+5)}}>{sayac}</button>
            </div>
            {
                !baglanti? <div className="alert alert-danger mt-3">Bağlantı kesildi!</div> : ""
            }
        </>
    )
}

export default C1;