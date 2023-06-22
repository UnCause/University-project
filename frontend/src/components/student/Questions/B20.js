export default function B20 ({setb20q1, setb20q2, setb20q3}) {

    return (
        <div>
            <div className="question">
                <p>Які основні принципи ООП?</p><div className="variants">
            <div className="variant">
                <input name="b20q1" value="Y" onChange={(e) => setb20q1(e.target.value)} type="radio"/>
            <label>Інкапсуляція, спадкування, поліморфізм</label>
                </div>
            <div className="variant">
                <input name="b20q1" value="N" onChange={(e) => setb20q1(e.target.value)} type="radio"/>
            <label>Перевизначення, агрегація, композиція</label>
                </div>
            <div className="variant">
                <input name="b20q1" value="N" onChange={(e) => setb20q1(e.target.value)} type="radio"/>
            <label>Умовний оператор, цикли, функції</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка основна ідея ООП?</p><div className="variants">
            <div className="variant">
                <input name="b20q2" value="N" onChange={(e) => setb20q2(e.target.value)} type="radio"/>
            <label>Використання готових компонентів для створення програм.</label>
                </div>
            <div className="variant">
                <input name="b20q2" value="Y" onChange={(e) => setb20q2(e.target.value)} type="radio"/>
            <label>Розробка програм, орієнтованих на взаємодію об'єктів.</label>
                </div>
            <div className="variant">
                <input name="b20q2" value="N" onChange={(e) => setb20q2(e.target.value)} type="radio"/>
            <label>Використання об'єктів для обробки великих обсягів даних.</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Що таке спадкування в контексті ООП?</p><div className="variants">
            <div className="variant">
                <input name="b20q3" value="Y" onChange={(e) => setb20q3(e.target.value)} type="radio"/>
            <label>Механізм, який дозволяє створювати об'єкти класу на основі існуючого класу.</label>
                </div>
            <div className="variant">
                <input name="b20q3" value="N" onChange={(e) => setb20q3(e.target.value)} type="radio"/>
            <label>Процес взаємодії між об'єктами класу.</label>
                </div>
            <div className="variant">
                <input name="b20q3" value="N" onChange={(e) => setb20q3(e.target.value)} type="radio"/>
            <label>Властивість об'єктів класу для збереження та доступу до даних.</label>
                </div>
                </div>
                </div>
        </div>
    )
}