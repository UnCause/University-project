export default function B23 ({setb23q1, setb23q2, setb23q3}) {

    return (
        <div>
            <div className="question">
                <p>Як називається головний компонент у React?</p><div className="variants">
                <div className="variant">
                    <input name="b23q1" value="N" onChange={(e) => setb23q1(e.target.value)} type="radio"/>
                <label>render()</label>
                    </div>
                <div className="variant">
                    <input name="b23q1" value="N" onChange={(e) => setb23q1(e.target.value)} type="radio"/>
             <label>main()</label>
                    </div>
             <div className="variant">
                <input name="b23q1" value="Y" onChange={(e) => setb23q1(e.target.value)} type="radio"/>
             <label>App()</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Що таке JSX в React?</p><div className="variants">
                <div className="variant">
                    <input name="b23q2" value="N" onChange={(e) => setb23q2(e.target.value)} type="radio"/>
                <label>Відкритий стандарт JavaScript для розширення можливостей мови.</label>
                    </div>
                <div className="variant">
                    <input name="b23q2" value="N" onChange={(e) => setb23q2(e.target.value)} type="radio"/>
             <label>Файловий формат для збереження компонентів у React проекті.</label>
                    </div>
             <div className="variant">
                <input name="b23q2" value="Y" onChange={(e) => setb23q2(e.target.value)} type="radio"/>
             <label>Синтаксичне розширення JavaScript, що дозволяє писати HTML-подібний код у JavaScript.</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Які основні концепції використовуються в React?</p><div className="variants">
                <div className="variant">
                    <input name="b23q3" value="Y" onChange={(e) => setb23q3(e.target.value)} type="radio"/>
                <label>Компоненти, стан, властивості</label>
                    </div>
                <div className="variant">
                    <input name="b23q3" value="N" onChange={(e) => setb23q3(e.target.value)} type="radio"/>
             <label>Інкапсуляція, спадкування, поліморфізм</label>
                    </div>
             <div className="variant">
                <input name="b23q3" value="N" onChange={(e) => setb23q3(e.target.value)} type="radio"/>
             <label>Класи, функції, модулі</label>
                </div>
                </div>
                </div>
        </div>
    )
}