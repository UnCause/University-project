export default function B32 ({setb32q1, setb32q2, setb32q3}) {

    return (
        <div>
            <div className="question">
                <p>Які типи тестів включаються до UI testing?</p><div className="variants">
            <div className="variant">
                <input name="b32q1" value="N" onChange={(e) => setb32q1(e.target.value)} type="radio"/>
            <label>Unit-тести, інтеграційні тести, функціональні тести</label>
                </div>
            <div className="variant">
                <input name="b32q1" value="N" onChange={(e) => setb32q1(e.target.value)} type="radio"/>
            <label>Performance тести, security тести, accessibility тести</label>
                </div>
            <div className="variant">
                <input name="b32q1" value="Y" onChange={(e) => setb32q1(e.target.value)} type="radio"/>
            <label>Smoke тести, regression тести, end-to-end тести</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Який інструмент найчастіше використовується для автоматизації UI тестів?</p><div className="variants">
            <div className="variant">
                <input name="b32q2" value="Y" onChange={(e) => setb32q2(e.target.value)} type="radio"/>
            <label>Selenium</label>
                </div>
            <div className="variant">
                <input name="b32q2" value="N" onChange={(e) => setb32q2(e.target.value)} type="radio"/>
            <label>Git</label>
                </div>
            <div className="variant">
                <input name="b32q2" value="N" onChange={(e) => setb32q2(e.target.value)} type="radio"/>
            <label>Docker</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка стратегія вибору елементів на сторінці часто використовується в UI тестуванні?</p><div className="variants">
            <div className="variant">
                <input name="b32q3" value="N" onChange={(e) => setb32q3(e.target.value)} type="radio"/>
            <label>Запис та відтворення тестів</label>
                </div>
            <div className="variant">
                <input name="b32q3" value="Y" onChange={(e) => setb32q3(e.target.value)} type="radio"/>
            <label>Ідентифікація за допомогою CSS селекторів</label>
                </div>
            <div className="variant">
                <input name="b32q3" value="N" onChange={(e) => setb32q3(e.target.value)} type="radio"/>
            <label>Ручне введення критеріїв вибору елементів</label>
                </div>
                </div>
                </div>
        </div>
    )
}