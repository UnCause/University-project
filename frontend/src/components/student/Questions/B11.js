export default function B11 ({setb11q1, setb11q2, setb11q3}) {

    return (
        <div>
            <div className="question">
                <p>Що таке GitFlow?</p><div className="variants">
            <div className="variant">
                <input name="b11q1" value="N" onChange={(e) => setb11q1(e.target.value)} type="radio"/>
            <label>Командний рядок для виконання команд Git</label>
                </div>
            <div className="variant">
                <input name="b11q1" value="N" onChange={(e) => setb11q1(e.target.value)} type="radio"/>
            <label>Розподілена система керування версіями</label>
                </div>
            <div className="variant">
                <input name="b11q1" value="Y" onChange={(e) => setb11q1(e.target.value)} type="radio"/>
            <label>Модель гілок для організації розробки з використанням Git</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка гілка в GitFlow використовується для розробки нових функціональностей?</p><div className="variants">
            <div className="variant">
                <input name="b11q2" value="N" onChange={(e) => setb11q2(e.target.value)} type="radio"/>
            <label>master</label>
                </div>
            <div className="variant">
                <input name="b11q2" value="N" onChange={(e) => setb11q2(e.target.value)} type="radio"/>
            <label>develop</label>
                </div>
            <div className="variant">
                <input name="b11q2" value="Y" onChange={(e) => setb11q2(e.target.value)} type="radio"/>
            <label>feature</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка команда використовується для завершення розробки функціональності в GitFlow і об'єднання її з гілкою develop?</p><div className="variants">
            <div className="variant">
                <input name="b11q3" value="N" onChange={(e) => setb11q3(e.target.value)} type="radio"/>
            <label>merge</label>
                </div>
            <div className="variant">
                <input name="b11q3" value="N" onChange={(e) => setb11q3(e.target.value)} type="radio"/>
            <label>checkout</label>
                </div>
            <div className="variant">
                <input name="b11q3" value="Y" onChange={(e) => setb11q3(e.target.value)} type="radio"/>
            <label>finish</label>
                </div>
                </div>
                </div>
        </div>
    )
}