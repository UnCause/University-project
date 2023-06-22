export default function B3 ({setb3q1, setb3q2, setb3q3}) {

    return (
        <div>
            
            <div className="question">
                <p>Що таке API testing?</p>
                <div className="variants">
            <div className="variant">
                <input name="b3q1" value="N" onChange={(e) => setb3q1(e.target.value)} type="radio"/>
            <label>Тестування графічного інтерфейсу користувача</label>
                </div>
            <div className="variant">
                <input name="b3q1" value="Y" onChange={(e) => setb3q1(e.target.value)} type="radio"/>
            <label>Тестування веб-серверів та комунікації між ними</label>
                </div>
            <div className="variant">
                <input name="b3q1" value="N" onChange={(e) => setb3q1(e.target.value)} type="radio"/>
            <label>Тестування функціональності апаратних пристроїв</label>
                </div>
                </div>
                </div>

            
            <div className="question">
                <p>Яке з наступних тверджень є правильним для API testing?</p>
                <div className="variants">
            <div className="variant">
                <input name="b3q2" value="Y" onChange={(e) => setb3q2(e.target.value)} type="radio"/>
            <label>API testing перевіряє правильність взаємодії між компонентами програмного забезпечення.</label>
                </div>
            <div className="variant">
                <input name="b3q2" value="N" onChange={(e) => setb3q2(e.target.value)} type="radio"/>
            <label>API testing виключно тестує швидкість та відмовостійкість системи.</label>
                </div>
            <div className="variant">
                <input name="b3q2" value="N" onChange={(e) => setb3q2(e.target.value)} type="radio"/>
            <label>API testing фокусується на перевірці графічного представлення даних.</label>
                </div>
                </div>
                </div>

            
            <div className="question">
                <p>Які методи HTTP-запитів використовуються у API testing?</p>
                <div className="variants">
            <div className="variant">
                <input name="b3q3" value="N" onChange={(e) => setb3q3(e.target.value)} type="radio"/>
            <label>READ, WRITE, DELETE</label>
                </div>
            <div className="variant">
                <input name="b3q3" value="N" onChange={(e) => setb3q3(e.target.value)} type="radio"/>
            <label>SEARCH, UPDATE, REMOVE</label>
                </div>
            <div className="variant">
                <input name="b3q3" value="Y" onChange={(e) => setb3q3(e.target.value)} type="radio"/>
            <label>GET, POST, DELETE</label>
                </div>
                </div>
                </div>
        </div>
    )
}