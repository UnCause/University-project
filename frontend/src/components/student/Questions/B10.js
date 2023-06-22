export default function B10 ({setb10q1, setb10q2, setb10q3}) {

    return (
        <div>
            <div className="question">
                <p>Яка команда використовується для створення нової гілки в Git?</p> <div className="variants">
            <div className="variant">
                <input name="b10q1" value="N" onChange={(e) => setb10q1(e.target.value)} type="radio"/>
            <label>checkout</label>
                </div>
            <div className="variant">
                <input name="b10q1" value="Y" onChange={(e) => setb10q1(e.target.value)} type="radio"/>
            <label>branch</label>
                </div>
            <div className="variant">
                <input name="b10q1" value="N" onChange={(e) => setb10q1(e.target.value)} type="radio"/>
            <label>commit</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка команда використовується для додавання змін до індексу в Git?</p> <div className="variants">
            <div className="variant">
                <input name="b10q2" value="Y" onChange={(e) => setb10q2(e.target.value)} type="radio"/>
            <label>add</label>
                </div>
            <div className="variant">
                <input name="b10q2" value="N" onChange={(e) => setb10q2(e.target.value)} type="radio"/>
            <label>commit</label>
                </div>
            <div className="variant">
                <input name="b10q2" value="N" onChange={(e) => setb10q2(e.target.value)} type="radio"/>
            <label>push</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка з наступних команд використовується для відправки змін на віддалений репозиторій в Git?</p> <div className="variants">
            <div className="variant">
                <input name="b10q3" value="N" onChange={(e) => setb10q3(e.target.value)} type="radio"/>
            <label>clone</label>
                </div>
            <div className="variant">
                <input name="b10q3" value="Y" onChange={(e) => setb10q3(e.target.value)} type="radio"/>
            <label>push</label>
                </div>
            <div className="variant">
                <input name="b10q3" value="N" onChange={(e) => setb10q3(e.target.value)} type="radio"/>
            <label>pull</label>
                </div>
                </div>
                </div>
        </div>
    )
}