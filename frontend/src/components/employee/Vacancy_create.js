import { useState, useEffect } from "react"
import axios from "axios"
import Select from 'react-select'
import { useParams, useNavigate } from "react-router-dom"

export default function Vacancy_create () {

    const params = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [salary, setSalary] = useState("")
    const [description, setDescription] = useState("")
    const [contacts, setContacts] = useState("")
    const [competencies, setCompetencies] = useState(null)
    const [checked, setChecked] = useState(true)
    const [error, setError] = useState("")
    const [backendData, setBackendData] = useState([{}]);

    useEffect(()=>{
        fetch("/company/competencies").then(
        response => response.json()
        ).then(
        data =>{
            setBackendData(data)
        }
        )
    }, [])


    const options=[]; 
    backendData.forEach(element => {
        options.push({value: element.id, "label": element.name})
    });

    const axiosPostData = async() => {
        const postData = {
            title: title,
            salary: salary,
            description: description,
            contacts: contacts,
            checked:checked,
            competencies: competencies,
            companyid: params.cid
        }

        await axios.post('http://localhost:5000/company/vacancy/create/', postData)
        .then(res => setError(<p>{res.data}</p>))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title || !salary || !description || !contacts || !competencies) {
            setError(<p>Заповніть, будь-ласка всі полі</p>)
        } else {
            setError('')
            axiosPostData()
            navigate("/companies/"+params.cid)
        }
    }

    const handleChange = () => {
        setChecked(!checked);
      };


    return (
    <div className="vacancy-create-container">
        <h2>Створення вакансії</h2>
        <div className="vacancy-create-form">
        <form>
        <label>Назва вакансії:</label><br/>
        <input name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/><br/><br/>
        <label>Заробітня платня:</label><br/>
        <input name="salary" type="text" value={salary} onChange={(e) => setSalary(e.target.value)}/><br/><br/>
        <label>Опис вакансії:</label><br/>
        <textarea name="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/><br/><br/>
        <label>Контакти роботодавця:</label><br/>
        <textarea name="contacts" type="text" value={contacts} onChange={(e) => setContacts(e.target.value)}/><br/><br/>
        <div>
            <label className="form-control">Вакансія активна:<input type="checkbox" name="isActive" checked={checked} onChange={handleChange}/></label><br/><br/>
            </div>
        <div className="vacancy-multi-select">
        <Select
            isMulti
            name="competencies"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(e) => setCompetencies(e)}
        />
        </div>
        {error}
        <input className="btn vacancy-create-btn" type="submit" value="Додати вакансію" onClick={handleSubmit} />
     </form>
     <a className="btn" href="/companies">До списку компаній</a>
     </div>
    </div>
    )
}