import { useEffect, useState } from "react";
import Ulke from "./Ulke";

function UlkeListe() {
    const [hata, hataGuncelle] = useState(null); //hata mesaji
    const [yukleniyor, yukleniyorGuncelle] = useState(true); //verilerin yuklenme durumu
    const [ulkeler, ulkeleriGuncelle] = useState([]); //asıl verilerimiz bu array icerisinde olacak

    //arama islemleri icin gerekli
    const [arama, aramaGuncelle] = useState("");
    const [aramaAlanlari] = useState(["capital","name"]); 
    const [filterParam, setFilterParam] = useState("Tümü");
    

    useEffect(() => {
        async function veriCek(){
            try {
                const yanit = await fetch("https://restcountries.com/v3.1/all")
                const JSObjesi = await yanit.json()
                //console.log(JSObjesi)
                ulkeleriGuncelle(JSObjesi);
                yukleniyorGuncelle(false);
                //ya da
                //ulkeleriGuncelle([...JSObjesi])
            } catch (hata) {
                hataGuncelle(hata.message)
            }
        }

        // @TODO gerçek app'te veriCek() dogrudan calistirilacak. setTimeout olmayacak.
        //setTimeout(() => {veriCek()}, 2000);
        veriCek()
    }, [])
    
    function filtrele(ulkeler){
        return ulkeler.filter((ulke) => {

            if(filterParam !== "Tümü")
                if(ulke.region !== filterParam) return;


            const aranan = arama.toLowerCase();
            if(ulke.name?.common.toLowerCase().includes(aranan))
                return true

            if(ulke.name?.official.toLowerCase().includes(aranan))
                return true
            
            const ulkeKisaltma = ulke.cca3.toLowerCase();
            if(ulke.name["nativeName"] && ulke.name?.nativeName[ulkeKisaltma]?.official.toLowerCase().includes(aranan))
                return true

            if(ulke.name["nativeName"] && ulke.name?.nativeName[ulkeKisaltma]?.common.toLowerCase().includes(aranan))
                return true

            return ulke.capital?.some( baskent => baskent.toLowerCase().includes(aranan) )

        });
        
    }


    if(hata){
      return(
        <>
        <div className="alert alert-danger">{hata}</div>
        </>
      )
    }
    
    if(yukleniyor){
      return(
        <>Yükleniyor...</>
      )
  
    }
    const filtrelenmisUlkeler = filtrele(ulkeler)
  
    return (
      <>
        <h2>ÜLKE LİSTESİ</h2>
        <div className="mb-4">
            <div className="row">
                <div className="col-6">
                    <h5>FİTRELEME</h5>
                    <input value={arama} onChange={(e)=>{aramaGuncelle(e.target.value)}} className="form-control" type="text" placeholder="Arma ifadesi..."></input>
                    <select
                        onChange={(e) => {
                            setFilterParam(e.target.value);
                        }}
                        className="form-select mt-1"
                        aria-label="Filter Countries By Region"
                        >
                        <option value="Tümü">Bölgelere göre filtrele</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
                <div className="col-6">
                    <h5>SIRALAMA</h5>
                </div>
            </div>
        </div>
        <p>Sayı : {filtrelenmisUlkeler.length}</p>
        <div className="row g-3">
            {
                filtrelenmisUlkeler.map((ulke)=><Ulke key={ulke.name.common} ulkeVeri={ulke}/>)
            }
        </div>
      </>
  
    );
  }
  
  export default UlkeListe;
  