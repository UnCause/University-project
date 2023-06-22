
export default function Main_Page () {

    let student = {image: require("../assets/images/Student.png")}
    let employer = {image: require("../assets/images/Employer.png")}

    return (
    <div className="auth-container">
        <h2>Оберіть спосіб входу:</h2>
        <div className="auth-box">
        <a className="auth-link" href="/student"><div className="auth auth-student">
            <p>Студент</p>
            <img alt="Embedded" src={student.image}/>
            </div></a>
        
        <a className="auth-link" href="/companies"><div className="auth auth-employer">
            <p>Роботодавець</p>
            <img alt="Embedded" src={employer.image}/>
            </div></a>
        </div>    
    </div>
    )
}