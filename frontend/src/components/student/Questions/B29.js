export default function B29 ({setb29q1, setb29q2, setb29q3}) {

    return (
        <div>
            <div className="question">
                <p>Що означає SQL?</p><div className="variants">
            <div className="variant">
                <input name="b29q1" value="Y" onChange={(e) => setb29q1(e.target.value)} type="radio"/>
            <label>Structured Query Language</label>
                </div>
            <div className="variant">
                <input name="b29q1" value="N" onChange={(e) => setb29q1(e.target.value)} type="radio"/>
            <label>Simple Query Language</label>
                </div>
            <div className="variant">
                <input name="b29q1" value="N" onChange={(e) => setb29q1(e.target.value)} type="radio"/>
            <label>System Query Language</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка функція використовується для вибору певних рядків з таблиці за певною умовою?</p><div className="variants">
            <div className="variant">
                <input name="b29q2" value="Y" onChange={(e) => setb29q2(e.target.value)} type="radio"/>
            <label>WHERE</label>
                </div>
            <div className="variant">
                <input name="b29q2" value="N" onChange={(e) => setb29q2(e.target.value)} type="radio"/>
            <label>FROM</label>
                </div>
            <div className="variant">
                <input name="b29q2" value="N" onChange={(e) => setb29q2(e.target.value)} type="radio"/>
            <label>GROUP BY</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка команда використовується для створення нової таблиці в базі даних?</p><div className="variants">
            <div className="variant">
                <input name="b29q3" value="N" onChange={(e) => setb29q3(e.target.value)} type="radio"/>
            <label>INSERT</label>
                </div>
            <div className="variant">
                <input name="b29q3" value="Y" onChange={(e) => setb29q3(e.target.value)} type="radio"/>
            <label>CREATE</label>
                </div>
            <div className="variant">
                <input name="b29q3" value="N" onChange={(e) => setb29q3(e.target.value)} type="radio"/>
            <label>SELECT</label>
                </div>
                </div>
                </div>
        </div>
    )
}