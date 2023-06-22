export default function B28 ({setb28q1, setb28q2, setb28q3}) {

    return (
        <div>
            <div className="question">
                <p>Яка основна мета використання Spring Framework?</p><div className="variants">
            <div className="variant">
                <input name="b28q1" value="N" onChange={(e) => setb28q1(e.target.value)} type="radio"/>
            <label>Створення веб-сторінок</label>
                </div>
            <div className="variant">
                <input name="b28q1" value="Y" onChange={(e) => setb28q1(e.target.value)} type="radio"/>
            <label>Забезпечення інверсії керування та керування бобами</label>
                </div>
            <div className="variant">
                <input name="b28q1" value="N" onChange={(e) => setb28q1(e.target.value)} type="radio"/>
            <label>Розробка мобільних додатків</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Який компонент Spring Framework використовується для організації шарів додатку та ін'єкції залежностей?</p><div className="variants">
            <div className="variant">
                <input name="b28q2" value="N" onChange={(e) => setb28q2(e.target.value)} type="radio"/>
            <label>Spring Data</label>
                </div>
            <div className="variant">
                <input name="b28q2" value="N" onChange={(e) => setb28q2(e.target.value)} type="radio"/>
            <label>Spring Boot</label>
                </div>
            <div className="variant">
                <input name="b28q2" value="Y" onChange={(e) => setb28q2(e.target.value)} type="radio"/>
            <label>Spring IoC Container</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Які модулі включає Spring Framework?</p><div className="variants">
            <div className="variant">
                <input name="b28q3" value="Y" onChange={(e) => setb28q3(e.target.value)} type="radio"/>
            <label>Core, MVC, Security</label>
                </div>
            <div className="variant">
                <input name="b28q3" value="N" onChange={(e) => setb28q3(e.target.value)} type="radio"/>
            <label>Database, Networking, Graphics</label>
                </div>
            <div className="variant">
                <input name="b28q3" value="N" onChange={(e) => setb28q3(e.target.value)} type="radio"/>
            <label>Testing, Logging, Debugging</label>
                </div>
                </div>
                </div>
        </div>
    )
}