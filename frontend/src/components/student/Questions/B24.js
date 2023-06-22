export default function B24 ({setb24q1, setb24q2, setb24q3}) {

    return (
        <div>
            <div className="question">
                <p>Яка основна мета використання RSpec?</p> <div className="variants">
            <div className="variant">
                <input name="b24q1" value="N" onChange={(e) => setb24q1(e.target.value)} type="radio"/>
            <label>Виконання функціональних тестів на рівні інтерфейсу користувача</label>
                </div>
            <div className="variant">
                <input name="b24q1" value="Y" onChange={(e) => setb24q1(e.target.value)} type="radio"/>
            <label>Виконання юніт-тестів для перевірки окремих функцій або методів</label>
                </div>
            <div className="variant">
                <input name="b24q1" value="N" onChange={(e) => setb24q1(e.target.value)} type="radio"/>
            <label>Генерація документації для проекту на основі специфікацій</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Які конструкції використовуються для створення тестів в RSpec?</p> <div className="variants">
            <div className="variant">
                <input name="b24q2" value="Y" onChange={(e) => setb24q2(e.target.value)} type="radio"/>
            <label>describe, it, expect</label>
                </div>
            <div className="variant">
                <input name="b24q2" value="N" onChange={(e) => setb24q2(e.target.value)} type="radio"/>
            <label>for, while, if</label>
                </div>
            <div className="variant">
                <input name="b24q2" value="N" onChange={(e) => setb24q2(e.target.value)} type="radio"/>
            <label>class, def, end</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Які основні компоненти використовуються в RSpec для написання тестів?</p> <div className="variants">
            <div className="variant">
                <input name="b24q3" value="Y" onChange={(e) => setb24q3(e.target.value)} type="radio"/>
            <label>Специфікації (specifications) та спостереження (expectations)</label>
                </div>
            <div className="variant">
                <input name="b24q3" value="N" onChange={(e) => setb24q3(e.target.value)} type="radio"/>
            <label>Класи (classes) та об'єкти (objects)</label>
                </div>
            <div className="variant">
                <input name="b24q3" value="N" onChange={(e) => setb24q3(e.target.value)} type="radio"/>
            <label>Функції (functions) та методи (methods)</label>
                </div>
                </div>
                </div>
        </div>
    )
}