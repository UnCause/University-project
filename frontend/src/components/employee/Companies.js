import React, {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"

export default function Companies () {

        const navigate = useNavigate()
        const [backendData, setBackendData] = useState([{}])
        const [companyid, setCompanyid] = useState([{}])

        useEffect(()=>{
            fetch("/company").then(
            response => response.json()
            ).then(
            data =>{
                setBackendData(data)
            }
            )
        }, [])

        const axiosPostData = async() => {
            const postData = {
                companyid: companyid
            }
    
            await axios.post('http://localhost:5000/company/delete', postData)
        }

        function handleDelete (e) {
            e.preventDefault()
            axiosPostData()
            // navigate("/companies")

        }

    
    return (
    <div className="companies-root-container">
        <h2>Оберіть компанію</h2>
        <div className="companies-container">
        {
        backendData && backendData?.map(company => {
            return (
                <div className="company-link">
                <a href={"/companies/" +company.id}>
                    <div className="company-container">
                        <p>{company.name}</p>
                        <div className="company-editlogo">
                        <a href={"/companies/edit/" + company.id}><FontAwesomeIcon icon={faPenToSquare} className="company-icon icon " size="2xl" /></a>
                        {/* <a className="btn" href="/companies" onClick={handleDelete}><FontAwesomeIcon icon={faTrash} className="company-icon icon " size="xl" /></a> */}
                        <img className="company-logo" alt="Embedded" src={company.logotype}/>
                        </div>
                    </div>
                </a>
                </div>
            )
            })
            }
        <div className="btn companies-btn"><a href="/companies/create">Додати компанію</a></div>
        </div>
      
    </div>
    )
}