export default function B1 ({setb1q1, setb1q2, setb1q3}) {

    return (
        <div>
            <div className="question"><p>Яка з наведених мов програмування НЕ підтримується на платформі .NET?</p>
            <div className="variants">
            <div className="variant">
            <input name="b1q1" value="N" onChange={(e) => setb1q1(e.target.value)} type="radio"/>
            <label>C#</label>
            </div>
            <div className="variant">
            <input name="b1q1" value="Y" onChange={(e) => setb1q1(e.target.value)} type="radio"/>
            <label>Java</label>
            </div>
            <div className="variant">
            <input name="b1q1" value="N" onChange={(e) => setb1q1(e.target.value)} type="radio"/>
            <label>F#</label>
            </div>
            </div>
            </div>

            <div className="question"><p>Які з наступних типів даних НЕ входять до складу базових типів даних у платформі .NET?</p>
            <div>
            <div className="variant">
            <input name="b1q2" value="N" onChange={(e) => setb1q2(e.target.value)} type="radio"/>
            <label>int</label>
            </div>
            <div className="variant">
            <input name="b1q2" value="N" onChange={(e) => setb1q2(e.target.value)} type="radio"/>
            <label>string</label>
            </div>
            <div className="variant">
            <input name="b1q2" value="Y" onChange={(e) => setb1q2(e.target.value)} type="radio"/>
            <label>list</label>
            </div>
            </div>
            </div>

            <div className="question"><p>Що таке MSIL (Microsoft Intermediate Language) в платформі .NET?</p>
            <div>
            <div className="variant">
            <input name="b1q3" value="N" onChange={(e) => setb1q3(e.target.value)} type="radio"/>
            <label>Мова програмування для створення веб-додатків</label>
            </div>
            <div className="variant">
            <input name="b1q3" value="Y" onChange={(e) => setb1q3(e.target.value)} type="radio"/>
            <label>Проміжна мова, в яку компілюється код .NET</label>
            </div>
            <div className="variant">
            <input name="b1q3" value="N" onChange={(e) => setb1q3(e.target.value)} type="radio"/>
            <label>Інструмент для розробки мобільних додатків</label>
            </div>
            </div>
            </div>
        </div>
    )
}