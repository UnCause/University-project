import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faHome, faInfo } from '@fortawesome/free-solid-svg-icons'

// library.add(fas, FontAwesomeIcon)


export default function Header() {

    const navigate = useNavigate()
    let logo = {image: require("../assets/images/Logo.png")}

    return (
        <header>
            
            <div className="navbar">
                <div className="logo"> <a href="/"><img alt="Embedded" className="logo-img" src={logo.image}/></a><a href="/">SCAM</a></div>
                <ul className="links">
                    <li><a href="/"><FontAwesomeIcon icon={faHome} className="icon" size="xl" />Головна</a></li>
                    <li><a href="/about"><FontAwesomeIcon icon={faInfo} className="icon" size="xl" />Про проєкт</a></li>
                    <li><a href="/contacts"><FontAwesomeIcon icon={faAddressCard} className="icon" size="xl" />Контакти</a></li>
                </ul>
            </div>
        </header>
    )
}