export default function B21 ({setb21q1, setb21q2, setb21q3}) {

    return (
        <div>
            <div className="question">
                <p>Яка з наступних ознак є характерною для PHP?</p><div className="variants">
            <div className="variant"></div><input name="b21q1" value="N" onChange={(e) => setb21q1(e.target.value)} type="radio"/>
            <label>Компілюється в машинний код перед виконанням.</label>
            <div className="variant"></div><input name="b21q1" value="Y" onChange={(e) => setb21q1(e.target.value)} type="radio"/>
            <label>Інтерпретується безпосередньо на сервері.</label>
            <div className="variant"></div><input name="b21q1" value="N" onChange={(e) => setb21q1(e.target.value)} type="radio"/>
            <label>Використовується тільки для створення веб-сторінок.</label>
                </div>
            </div>

            <div className="question">
                <p>Яка функція використовується для відправки HTTP-запиту в PHP?</p><div className="variants">
            <div className="variant"></div><input name="b21q2" value="N" onChange={(e) => setb21q2(e.target.value)} type="radio"/>
            <label>sendRequest()</label>
            <div className="variant"></div><input name="b21q2" value="N" onChange={(e) => setb21q2(e.target.value)} type="radio"/>
            <label>httpRequest()</label>
            <div className="variant"></div><input name="b21q2" value="Y" onChange={(e) => setb21q2(e.target.value)} type="radio"/>
            <label>curl_exec()</label>
                </div>
            </div>

            <div className="question">
                <p>Який оператор використовується для з'єднання рядків (конкатенації) в PHP?</p><div className="variants">
            <div className="variant"></div><input name="b21q3" value="N" onChange={(e) => setb21q3(e.target.value)} type="radio"/>
            <label>+</label>
            <div className="variant"></div><input name="b21q3" value="N" onChange={(e) => setb21q3(e.target.value)} type="radio"/>
            <label>~</label>
            <div className="variant"></div><input name="b21q3" value="Y" onChange={(e) => setb21q3(e.target.value)} type="radio"/>
            <label>.</label>
                </div>
            </div>
        </div>
    )
}