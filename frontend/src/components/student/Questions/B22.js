export default function B22 ({setb22q1, setb22q2, setb22q3}) {

    return (
        <div>
            <div className="question" >
            <p>Які з наступних типів даних є не змінюваними (immutable) в Python?</p><div className="variants">

            <div className="variant">
                <input name="b22q1" value="N" onChange={(e) => setb22q1(e.target.value)} type="radio"/>
            <label>Списки (lists)</label>
                </div>
            <div className="variant">
                <input name="b22q1" value="Y" onChange={(e) => setb22q1(e.target.value)} type="radio"/>
            <label>Кортежі (tuples)</label>
                </div>
            <div className="variant">
                <input name="b22q1" value="N" onChange={(e) => setb22q1(e.target.value)} type="radio"/>
            <label>Словники (dictionaries)</label>
                </div>
            </div>
            </div>

            <div className="question" >
            <p>Який символ використовується для початку коментаря в Python?</p><div className="variants">

            <div className="variant">
                <input name="b22q2" value="N" onChange={(e) => setb22q2(e.target.value)} type="radio"/>
            <label>//</label>
                </div>
            <div className="variant">
                <input name="b22q2" value="Y" onChange={(e) => setb22q2(e.target.value)} type="radio"/>
            <label>#</label>
                </div>
            <div className="variant">
                <input name="b22q2" value="N" onChange={(e) => setb22q2(e.target.value)} type="radio"/>
            <label>/*</label>
                </div>
            </div>
            </div>

            <div className="question" >
            <p>Який оператор використовується для логічного "і" в Python?</p><div className="variants">

            <div className="variant">
                <input name="b22q3" value="N" onChange={(e) => setb22q3(e.target.value)} type="radio"/>
            <label>&&</label>
                </div>
            <div className="variant">
                <input name="b22q3" value="N" onChange={(e) => setb22q3(e.target.value)} type="radio"/>
            <label>||</label>
                </div>
            <div className="variant">
                <input name="b22q3" value="Y" onChange={(e) => setb22q3(e.target.value)} type="radio"/>
            <label>and</label>
                </div>
            </div>
            </div>
        </div>
    )
}