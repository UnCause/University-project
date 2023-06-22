import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import B1 from "./Questions/B1.js"
import B2 from "./Questions/B2.js"
import B3 from "./Questions/B3.js"
import B4 from "./Questions/B4.js"
import B5 from "./Questions/B5.js"
import B6 from "./Questions/B6.js"
import B7 from "./Questions/B7.js"
import B8 from "./Questions/B8.js"
import B9 from "./Questions/B9.js"
import B10 from "./Questions/B10.js"
import B11 from "./Questions/B11.js"
import B12 from "./Questions/B12.js"
import B13 from "./Questions/B13.js"
import B14 from "./Questions/B14.js"
import B15 from "./Questions/B15.js"
import B16 from "./Questions/B16.js"
import B17 from "./Questions/B17.js"
import B18 from "./Questions/B18.js"
import B19 from "./Questions/B19.js"
import B20 from "./Questions/B20.js"
import B21 from "./Questions/B21.js"
import B22 from "./Questions/B22.js"
import B23 from "./Questions/B23.js"
import B24 from "./Questions/B24.js"
import B25 from "./Questions/B25.js"
import B26 from "./Questions/B26.js"
import B27 from "./Questions/B27.js"
import B28 from "./Questions/B28.js"
import B29 from "./Questions/B29.js"
import B30 from "./Questions/B30.js"
import B31 from "./Questions/B31.js"
import B32 from "./Questions/B32.js"
import B33 from "./Questions/B33.js"
// import { useParams, useNavigate } from "react-router-dom"

export default function Student_questioning () {

    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [competency_data, setCompetency_data] = useState({})
    const [b1q1, setb1q1] = useState(null)
    const [b1q2, setb1q2] = useState(null)
    const [b1q3, setb1q3] = useState(null)
    const [b2q1, setb2q1] = useState(null)
    const [b2q2, setb2q2] = useState(null)
    const [b2q3, setb2q3] = useState(null)
    const [b3q1, setb3q1] = useState(null)
    const [b3q2, setb3q2] = useState(null)
    const [b3q3, setb3q3] = useState(null)
    const [b4q1, setb4q1] = useState(null)
    const [b4q2, setb4q2] = useState(null)
    const [b4q3, setb4q3] = useState(null)
    const [b5q1, setb5q1] = useState(null)
    const [b5q2, setb5q2] = useState(null)
    const [b5q3, setb5q3] = useState(null)
    const [b6q1, setb6q1] = useState(null)
    const [b6q2, setb6q2] = useState(null)
    const [b6q3, setb6q3] = useState(null)
    const [b7q1, setb7q1] = useState(null)
    const [b7q2, setb7q2] = useState(null)
    const [b7q3, setb7q3] = useState(null)
    const [b8q1, setb8q1] = useState(null)
    const [b8q2, setb8q2] = useState(null)
    const [b8q3, setb8q3] = useState(null)
    const [b9q1, setb9q1] = useState(null)
    const [b9q2, setb9q2] = useState(null)
    const [b9q3, setb9q3] = useState(null)
    const [b10q1, setb10q1] = useState(null)
    const [b10q2, setb10q2] = useState(null)
    const [b10q3, setb10q3] = useState(null)
    const [b11q1, setb11q1] = useState(null)
    const [b11q2, setb11q2] = useState(null)
    const [b11q3, setb11q3] = useState(null)
    const [b12q1, setb12q1] = useState(null)
    const [b12q2, setb12q2] = useState(null)
    const [b12q3, setb12q3] = useState(null)
    const [b13q1, setb13q1] = useState(null)
    const [b13q2, setb13q2] = useState(null)
    const [b13q3, setb13q3] = useState(null)
    const [b14q1, setb14q1] = useState(null)
    const [b14q2, setb14q2] = useState(null)
    const [b14q3, setb14q3] = useState(null)
    const [b15q1, setb15q1] = useState(null)
    const [b15q2, setb15q2] = useState(null)
    const [b15q3, setb15q3] = useState(null)
    const [b16q1, setb16q1] = useState(null)
    const [b16q2, setb16q2] = useState(null)
    const [b16q3, setb16q3] = useState(null)
    const [b17q1, setb17q1] = useState(null)
    const [b17q2, setb17q2] = useState(null)
    const [b17q3, setb17q3] = useState(null)
    const [b18q1, setb18q1] = useState(null)
    const [b18q2, setb18q2] = useState(null)
    const [b18q3, setb18q3] = useState(null)
    const [b19q1, setb19q1] = useState(null)
    const [b19q2, setb19q2] = useState(null)
    const [b19q3, setb19q3] = useState(null)
    const [b20q1, setb20q1] = useState(null)
    const [b20q2, setb20q2] = useState(null)
    const [b20q3, setb20q3] = useState(null)
    const [b21q1, setb21q1] = useState(null)
    const [b21q2, setb21q2] = useState(null)
    const [b21q3, setb21q3] = useState(null)
    const [b22q1, setb22q1] = useState(null)
    const [b22q2, setb22q2] = useState(null)
    const [b22q3, setb22q3] = useState(null)
    const [b23q1, setb23q1] = useState(null)
    const [b23q2, setb23q2] = useState(null)
    const [b23q3, setb23q3] = useState(null)
    const [b24q1, setb24q1] = useState(null)
    const [b24q2, setb24q2] = useState(null)
    const [b24q3, setb24q3] = useState(null)
    const [b25q1, setb25q1] = useState(null)
    const [b25q2, setb25q2] = useState(null)
    const [b25q3, setb25q3] = useState(null)
    const [b26q1, setb26q1] = useState(null)
    const [b26q2, setb26q2] = useState(null)
    const [b26q3, setb26q3] = useState(null)
    const [b27q1, setb27q1] = useState(null)
    const [b27q2, setb27q2] = useState(null)
    const [b27q3, setb27q3] = useState(null)
    const [b28q1, setb28q1] = useState(null)
    const [b28q2, setb28q2] = useState(null)
    const [b28q3, setb28q3] = useState(null)
    const [b29q1, setb29q1] = useState(null)
    const [b29q2, setb29q2] = useState(null)
    const [b29q3, setb29q3] = useState(null)
    const [b30q1, setb30q1] = useState(null)
    const [b30q2, setb30q2] = useState(null)
    const [b30q3, setb30q3] = useState(null)
    const [b31q1, setb31q1] = useState(null)
    const [b31q2, setb31q2] = useState(null)
    const [b31q3, setb31q3] = useState(null)
    const [b32q1, setb32q1] = useState(null)
    const [b32q2, setb32q2] = useState(null)
    const [b32q3, setb32q3] = useState(null)
    const [b33q1, setb33q1] = useState(null)
    const [b33q2, setb33q2] = useState(null)
    const [b33q3, setb33q3] = useState(null)

    useEffect(()=>{
        fetch("/student/questions_data").then(
        response => response.json()
        ).then(
        data =>{
            setCompetency_data(data.competency_data)
        }
        )
    }, [])

    const axiosPostData = async() => {
        const postData = {
            b1: [b1q1, b1q2, b1q3],
            b2: [b2q1, b2q2, b2q3],
            b3: [b3q1, b3q2, b3q3],
            b4: [b4q1, b4q2, b4q3],
            b5: [b5q1, b5q2, b5q3],
            b6: [b6q1, b6q2, b6q3],
            b7: [b7q1, b7q2, b7q3],
            b8: [b8q1, b8q2, b8q3],
            b9: [b9q1, b9q2, b9q3],
            b10: [b10q1, b10q2, b10q3],
            b11: [b11q1, b11q2, b11q3],
            b12: [b12q1, b12q2, b12q3],
            b13: [b13q1, b13q2, b13q3],
            b14: [b14q1, b14q2, b14q3],
            b15: [b15q1, b15q2, b15q3],
            b16: [b16q1, b16q2, b16q3],
            b17: [b17q1, b17q2, b17q3],
            b18: [b18q1, b18q2, b18q3],
            b19: [b19q1, b19q2, b19q3],
            b20: [b20q1, b20q2, b20q3],
            b21: [b21q1, b21q2, b21q3],
            b22: [b22q1, b22q2, b22q3],
            b23: [b23q1, b23q2, b23q3],
            b24: [b24q1, b24q2, b24q3],
            b25: [b25q1, b25q2, b25q3],
            b26: [b26q1, b26q2, b26q3],
            b27: [b27q1, b27q2, b27q3],
            b28: [b28q1, b28q2, b28q3],
            b29: [b29q1, b29q2, b29q3],
            b30: [b30q1, b30q2, b30q3],
            b31: [b31q1, b31q2, b31q3],
            b32: [b32q1, b32q2, b32q3],
            b33: [b33q1, b33q2, b33q3]
        }

        await axios.post('http://localhost:5000/student/questions', postData)
        .then(res => setError(<p>{res.data}</p>))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        
            setError('')
            axiosPostData()
            navigate("/student/result")
    }
    
    let template = []
    // if(competency_data[0]){
    //     template.push(<B1 setb1q1={setb1q1} setb1q2={setb1q2} setb1q3={setb1q3}/>
    // }
    competency_data[0] ? template.push({block: <B1 setb1q1={setb1q1} setb1q2={setb1q2} setb1q3={setb1q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[1] ? template.push({block: <B2 setb2q1={setb2q1} setb2q2={setb2q2} setb2q3={setb2q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[2] ? template.push({block: <B3 setb3q1={setb3q1} setb3q2={setb3q2} setb3q3={setb3q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[3] ? template.push({block: <B4 setb4q1={setb4q1} setb4q2={setb4q2} setb4q3={setb4q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[4] ? template.push({block: <B5 setb5q1={setb5q1} setb5q2={setb5q2} setb5q3={setb5q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[5] ? template.push({block: <B6 setb6q1={setb6q1} setb6q2={setb6q2} setb6q3={setb6q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[6] ? template.push({block: <B7 setb7q1={setb7q1} setb7q2={setb7q2} setb7q3={setb7q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[7] ? template.push({block: <B8 setb8q1={setb8q1} setb8q2={setb8q2} setb8q3={setb8q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[8] ? template.push({block: <B9 setb9q1={setb9q1} setb9q2={setb9q2} setb9q3={setb9q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[9] ? template.push({block: <B10 setb10q1={setb10q1} setb10q2={setb10q2} setb10q3={setb10q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[10] ? template.push({block: <B11 setb11q1={setb11q1} setb11q2={setb11q2} setb11q3={setb11q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[11] ? template.push({block: <B12 setb12q1={setb12q1} setb12q2={setb12q2} setb12q3={setb12q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[12] ? template.push({block: <B13 setb13q1={setb13q1} setb13q2={setb13q2} setb13q3={setb13q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[13] ? template.push({block: <B14 setb14q1={setb14q1} setb14q2={setb14q2} setb14q3={setb14q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[14] ? template.push({block: <B15 setb15q1={setb15q1} setb15q2={setb15q2} setb15q3={setb15q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[15] ? template.push({block: <B16 setb16q1={setb16q1} setb16q2={setb16q2} setb16q3={setb16q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[16] ? template.push({block: <B17 setb17q1={setb17q1} setb17q2={setb17q2} setb17q3={setb17q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[17] ? template.push({block: <B18 setb18q1={setb18q1} setb18q2={setb18q2} setb18q3={setb18q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[18] ? template.push({block: <B19 setb19q1={setb19q1} setb19q2={setb19q2} setb19q3={setb19q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[19] ? template.push({block: <B20 setb20q1={setb20q1} setb20q2={setb20q2} setb20q3={setb20q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[20] ? template.push({block: <B21 setb21q1={setb21q1} setb21q2={setb21q2} setb21q3={setb21q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[21] ? template.push({block: <B22 setb22q1={setb22q1} setb22q2={setb22q2} setb22q3={setb22q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[22] ? template.push({block: <B23 setb23q1={setb23q1} setb23q2={setb23q2} setb23q3={setb23q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[23] ? template.push({block: <B24 setb24q1={setb24q1} setb24q2={setb24q2} setb24q3={setb24q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[24] ? template.push({block: <B25 setb25q1={setb25q1} setb25q2={setb25q2} setb25q3={setb25q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[25] ? template.push({block: <B26 setb26q1={setb26q1} setb26q2={setb26q2} setb26q3={setb26q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[26] ? template.push({block: <B27 setb27q1={setb27q1} setb27q2={setb27q2} setb27q3={setb27q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[27] ? template.push({block: <B28 setb28q1={setb28q1} setb28q2={setb28q2} setb28q3={setb28q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[28] ? template.push({block: <B29 setb29q1={setb29q1} setb29q2={setb29q2} setb29q3={setb29q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[29] ? template.push({block: <B30 setb30q1={setb30q1} setb30q2={setb30q2} setb30q3={setb30q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[30] ? template.push({block: <B31 setb31q1={setb31q1} setb31q2={setb31q2} setb31q3={setb31q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[31] ? template.push({block: <B32 setb32q1={setb32q1} setb32q2={setb32q2} setb32q3={setb32q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})
    competency_data[32] ? template.push({block: <B33 setb33q1={setb33q1} setb33q2={setb33q2} setb33q3={setb33q3}/>, activeClass: "block-active"}) : template.push({block: null, activeClass: "block-inactive"})

    return (
        <div className="questions-root-container">
            <h2>Дайте відповіді на запитання:</h2>
         <form>
            <div className="questions-container">
            {template && template?.map(block => {
                return (
                    <div className={"questions-block " + block.activeClass}>
                    {block.block}
                    </div>
                )
            })}
            {error}
            <input type="submit" className="btn questioning-btn" onClick={handleSubmit} value="Перейти до результатів"/>
            </div>
         </form>
        </div>
    )
}