export default function B2 ({setb2q1, setb2q2, setb2q3}) {

    return (
        <div>
            <div className="question">
                <p>Що таке Angular?</p>
                <div className="variants">
            <div className="variant">
            <input name="b2q1" value="N" onChange={(e) => setb2q1(e.target.value)} type="radio"/>
            <label>Програмна мова для розробки десктопних додатків</label>
            </div>
            <div className="variant">
            <input name="b2q1" value="Y" onChange={(e) => setb2q1(e.target.value)} type="radio"/>
            <label>Фреймворк для розробки веб-додатків</label>
            </div>
            <div className="variant">
            <input name="b2q1" value="N" onChange={(e) => setb2q1(e.target.value)} type="radio"/>
            <label>Інтегроване середовище розробки (IDE) для JavaScript</label>
                </div>
            </div>
                </div>

            <div className="question">
                <p>Яка мова програмування використовується для розробки з використанням Angular?</p>
                <div className="variants">
            <div className="variant">
            <input name="b2q2" value="Y" onChange={(e) => setb2q2(e.target.value)} type="radio"/>
            <label>TypeScript</label>
            </div>
            <div className="variant">
            <input name="b2q2" value="N" onChange={(e) => setb2q2(e.target.value)} type="radio"/>
            <label>Python</label>
            </div>
            <div className="variant">
            <input name="b2q2" value="N" onChange={(e) => setb2q2(e.target.value)} type="radio"/>
            <label>Ruby</label>
                </div>
            </div>
                </div>

            <div className="question">
                <p>Яке з наступних тверджень є правильним для Angular?</p>
                <div className="variants">
            <div className="variant">
            <input name="b2q3" value="N" onChange={(e) => setb2q3(e.target.value)} type="radio"/>
            <label>Angular є розширенням фреймворка React.</label>
            </div>
            <div className="variant">
            <input name="b2q3" value="N" onChange={(e) => setb2q3(e.target.value)} type="radio"/>
            <label>Angular базується на мові програмування Java.</label>
            </div>
            <div className="variant">
            <input name="b2q3" value="Y" onChange={(e) => setb2q3(e.target.value)} type="radio"/>
            <label>Angular використовує компонентну архітектуру для побудови веб-додатків.</label>
                </div>
            </div>
                </div>
        </div>
    )
}