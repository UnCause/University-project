export default function B18 ({setb18q1, setb18q2, setb18q3}) {

    return (
        <div>
            <div className="question">
                <p>Який інструмент використовується в Nest.js для впорядкування коду та реалізації інверсії керування?</p><div className="variants">
            <div className="variant">
                <input name="b18q1" value="N" onChange={(e) => setb18q1(e.target.value)} type="radio"/>
            <label>Express.js</label>
                </div>
            <div className="variant">
                <input name="b18q1" value="N" onChange={(e) => setb18q1(e.target.value)} type="radio"/>
            <label>TypeORM</label>
                </div>
            <div className="variant">
                <input name="b18q1" value="Y" onChange={(e) => setb18q1(e.target.value)} type="radio"/>
            <label>Dependency Injection (DI)</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка структура проекту рекомендована для розробки за допомогою Nest.js?</p><div className="variants">
            <div className="variant">
                <input name="b18q2" value="N" onChange={(e) => setb18q2(e.target.value)} type="radio"/>
            <label>MVC (Model-View-Controller)</label>
                </div>
            <div className="variant">
                <input name="b18q2" value="N" onChange={(e) => setb18q2(e.target.value)} type="radio"/>
            <label>MVVM (Model-View-ViewModel)</label>
                </div>
            <div className="variant">
                <input name="b18q2" value="Y" onChange={(e) => setb18q2(e.target.value)} type="radio"/>
            <label>Modular</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка основна перевага використання декораторів в Nest.js?</p><div className="variants">
            <div className="variant">
                <input name="b18q3" value="N" onChange={(e) => setb18q3(e.target.value)} type="radio"/>
            <label>Забезпечують більшу швидкодію виконання програми.</label>
                </div>
            <div className="variant">
                <input name="b18q3" value="N" onChange={(e) => setb18q3(e.target.value)} type="radio"/>
            <label>Дозволяють створювати інтерфейси користувача.</label>
                </div>
            <div className="variant">
                <input name="b18q3" value="Y" onChange={(e) => setb18q3(e.target.value)} type="radio"/>
            <label>Спрощують організацію коду та забезпечують модульність.</label>
                </div>
                </div>
                </div>
        </div>
    )
}