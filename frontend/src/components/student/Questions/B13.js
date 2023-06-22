export default function B13 ({setb13q1, setb13q2, setb13q3}) {

    return (
        <div>
            <div className="question">
                <p>Що означає абревіатура HTML?</p><div className="variants">
            <div className="variant">
                <input name="b13q1" value="Y" onChange={(e) => setb13q1(e.target.value)} type="radio"/>
            <label>Hyper Text Markup Language</label>
                </div>
            <div className="variant">
                <input name="b13q1" value="N" onChange={(e) => setb13q1(e.target.value)} type="radio"/>
            <label>High-Level Markup Language</label>
                </div>
            <div className="variant">
                <input name="b13q1" value="N" onChange={(e) => setb13q1(e.target.value)} type="radio"/>
            <label>Home Tool Markup Language</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Який атрибут використовується для створення гіперпосилання в HTML?</p><div className="variants">
            <div className="variant">
                <input name="b13q2" value="N" onChange={(e) => setb13q2(e.target.value)} type="radio"/>
            <label>src</label>
                </div>
            <div className="variant">
                <input name="b13q2" value="N" onChange={(e) => setb13q2(e.target.value)} type="radio"/>
            <label>alt</label>
                </div>
            <div className="variant">
                <input name="b13q2" value="Y" onChange={(e) => setb13q2(e.target.value)} type="radio"/>
            <label>href</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Який елемент використовується для створення посилання в HTML?</p><div className="variants">
            <div className="variant">
                <input name="b13q3" value="N" onChange={(e) => setb13q3(e.target.value)} type="radio"/>
            <label>&lt;link&gt;</label>
                </div>
            <div className="variant">
                <input name="b13q3" value="Y" onChange={(e) => setb13q3(e.target.value)} type="radio"/>
            <label>&lt;a&gt;</label>
                </div>
            <div className="variant">
                <input name="b13q3" value="N" onChange={(e) => setb13q3(e.target.value)} type="radio"/>
            <label>&lt;p&gt;</label>
                </div>
                </div>
                </div>
        </div>
    )
}