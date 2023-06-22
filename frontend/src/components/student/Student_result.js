import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Student_result () {

    const navigate = useNavigate()
    const [vacanciesData, setVacanciesData] = useState([{}])
    
    
    useEffect(()=>{
        fetch("/student/result").then(
        response => response.json()
        ).then(
        data =>{
            setVacanciesData(data)
        }
        )
    }, [])


    return (
        
        <div className="result-root-container">
        <h2>Список вакансій</h2> 
        <h3>За результатами опитування було підібрано такі вакансії:</h3>   
            <div className="result-container">
            {
            vacanciesData && vacanciesData?.map(vacancy => {
            return (
                <div className="result-link">
                    <a href={"vacancy/"+ vacancy.id}>
                    <div className="result-vacancy-container">
                        <div className="result-vacancy-info">
                            <p>{vacancy.title}</p>
                            <p className="salary-info">{vacancy.salary}</p>
                        </div>
                        </div>
                    </a>

                </div>
            )
            })
            }
            </div>
</div>
    )
}