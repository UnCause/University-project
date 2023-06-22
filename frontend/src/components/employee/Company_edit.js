import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

export default function Company_create () {

    const navigate = useNavigate()
    const params = useParams()
    const [name, setName] = useState("")
    const [adress, setAdress] = useState("")
    const [description, setDescription] = useState("")
    const [logotype, setLogotype] = useState("")
    const [contacts, setContacts] = useState("")
    const [error, setError] = useState("")
    const [imgError, setImgError] = useState("")

    useEffect(()=>{
        fetch("http://localhost:5000/company/edit/"+params.cid).then(
        response => response.json()
        ).then(
        data =>{
            setName(data[0].name)
            setAdress(data[0].adress)
            setDescription(data[0].description)
            setLogotype(data[0].logotype)
            setContacts(data[0].contacts)
        }
        )
    }, [])


    const axiosPostData = async() => {
        const postData = {
            name: name,
            adress: adress,
            description: description,
            logotype: logotype,
            contacts: contacts,
            compid: params.id
        }

        await axios.post("http://localhost:5000/company/update/"+params.cid, postData)
        .then(res => setError(<p>{res.data}</p>))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !adress || !description || !logotype || !contacts) {
            setError(<p>Заповніть, будь-ласка всі полі</p>)
        } else {
            setError('')
            axiosPostData()
            navigate("/companies/")
        }
    }

    const convert2base64 = e => {
        const file = e.target.files[0]
        const reader = new FileReader()

        try {
            reader.onloadend = () => {
                setLogotype(reader.result.toString())
            }
    
            reader.readAsDataURL(file)
        }
        catch{
            setImgError(<p>Please, upload an image</p>)
            setLogotype("")
        }
    }

    return (
        <div className="company-create-container">
        <h2>Редагування компанії</h2>
        <div className="company-create-form">
        <form>
        <label>Назва компанії:</label><br/>
        <input name="name" type="text" required value={name} onChange={(e) => setName(e.target.value)}/><br/><br/>
        <label>Адреса компанії:</label><br/>
        <input name="adress" type="text" value={adress} onChange={(e) => setAdress(e.target.value)}/><br/><br/>
        <label>Про компанію:</label><br/>
        <textarea name="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/><br/><br/>
        <label>Логотип компанії:</label><br/>
        <div className="img-input">
        <input accept="image/*" id="input-files" name="logotype" type="file" onChange={(e) => convert2base64(e)}/>
        <div class="preview-images">
            {imgError}
          <img alt="Embedded" src={logotype}/>
        </div>
        </div>
        <label>Контакти компанії:</label><br/>
        <input name="contacts" type="text" value={contacts} onChange={(e) => setContacts(e.target.value)}/><br/><br/>
        {error}
        <input className="btn" type="submit" value="Оновити дані" onClick={handleSubmit} />
     </form>
        <div className="btn company-create-btn"><a href="/companies">До списку компаній</a></div>   
     </div>
    </div>
    )
}