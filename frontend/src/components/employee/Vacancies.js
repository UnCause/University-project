import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEye } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"

export default function Vacancies () {

        const params = useParams()
        const [vacanciesData, setVacanciesData] = useState([{}])
        const [companyData, setCompanyData] = useState("")

        useEffect(()=>{
            fetch("http://localhost:5000/company/"+params.cid).then(
            response => response.json()
            ).then(
            data =>{
                setVacanciesData(data)
                // const activeClass = []
                // data.forEach(vacancy => {
                //     if(vacancy.isActive){
                //         activeClass.push("vacancy-active")
                //     }else {
                //         activeClass.push("vacancy-inactive")
                //     }
                // });
                // setVacanciesData({data: data, activeClass: activeClass})
            }
            )
        }, [])

        useEffect(()=>{
            fetch("http://localhost:5000/company/edit/"+params.cid).then(
            response => response.json()
            ).then(
            data =>{
                setCompanyData(data[0])
            }
            )
        }, [])

    
    return (
    <div className="vacancies-root-container">
            <h2>Список вакансій</h2>    
            <div className="vacancies-container">
                {
                vacanciesData && vacanciesData?.map(vacancy => {
                return (
                    <div className="vacancy-gap">
                        <div className={"vacancy-container "+ vacancy.activeClass}>
                            <p>{vacancy.title}</p>
                            <div className="vacancy-links">
                                <a href={"/companies/"+companyData.id+"/edit/"+ vacancy.id}><FontAwesomeIcon icon={faPenToSquare} className="company-icon icon " size="2xl" /></a>
                                <a href={"/companies/"+companyData.id+"/preview/"+ vacancy.id}><FontAwesomeIcon icon={faEye} className="company-icon icon " size="2xl" /></a>
                            </div>
                        </div>
                    </div>
                )
                })
                }
                <div className="vacancy-btn-container">
                    <div className="btn vacancy-btn"><a href={"/companies/"+companyData.id+"/create/"}>Додати вакансію</a></div>
                    <div className="btn vacancy-btn"><a href="/companies">До списку компаній</a></div>
                </div>
            </div>
            
    </div>
    )
}