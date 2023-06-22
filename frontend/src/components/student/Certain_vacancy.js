import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Certain_vacancy () {

    const params = useParams()
    const [title, setTitle] = useState("")
    const [salary, setSalary] = useState("")
    const [description, setDescription] = useState("")
    const [contacts, setContacts] = useState("")
    const [competencies, setCompetencies] = useState([{}])
    const [companyData, setCompanyData] = useState("")
    
    useEffect(()=>{
        fetch("http://localhost:5000/company/vacancy/edit/"+params.vid).then(
        response => response.json()
        ).then(
        data =>{
            setTitle(data.vacancydata.title)
            setSalary(data.vacancydata.salary)
            setDescription(data.vacancydata.description)
            setContacts(data.vacancydata.contacts)
            const oldoptions =[]
            data.competencydata.forEach(element => {
                oldoptions.push({value: element.id, label: element.name})
            });
            setCompetencies(oldoptions)
            setCompanyData(data.companydata)
        }
        )
    }, [])

    return(
        <div className="certain-vacancy-root-container">
                <h2>{title}</h2>
                <div className="info">
            <div className="vacancy-info">
                <h3>Заробітня платня: {salary}</h3>
                <h3>Про вакансію:</h3>
                <p>{description}</p>
                <h3>Зв'яжіться з нами:</h3>
                <p>{contacts}</p>
            </div>
            <div className="company-info"> 
                <img alt="Embedded" src={companyData.logotype}/>
                <h2>{companyData.name}</h2>
                <h3>Про нас:</h3>
                <p>{companyData.description}</p>
                <h3>Контакти:</h3>
                <p>{companyData.contacts}</p>
                <h3>Компетентності:</h3>
                <div className="competencies">
            {
                competencies && competencies?.map(competency => {
                    return (
                    <div className="competency">
                    {competency.label}
                    </div>
                )
                })
            }
                </div>
            </div>
            </div>
        </div>
    )
}