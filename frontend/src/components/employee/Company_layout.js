import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

export default function Vacancies () {

        const params = useParams()
        const [companyData, setCompanyData] = useState("")

        useEffect(()=>{
            fetch("http://localhost:5000/company/edit/"+params.cid).then(
            response => response.json()
            ).then(
            data =>{
                setCompanyData(data[0])
            }
            )
        }, [])

    
    // return (
    //         <div className="comp-outlet"> 
    //             <img alt="Embedded" src={companyData.logotype}/>
    //             <h2>{companyData.name}</h2>
    //         </div>
    // )
}