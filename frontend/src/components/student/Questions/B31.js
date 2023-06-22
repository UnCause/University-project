export default function B31 ({setb31q1, setb31q2, setb31q3}) {

    return (
        <div>
            <div className="question">
                <p>Яка основна перевага використання TypeScript порівняно з JavaScript?</p><div className="variants">
            <div className="variant">
                <input name="b31q1" value="N" onChange={(e) => setb31q1(e.target.value)} type="radio"/>
            <label>Можливість написання коду без використання синтаксису JavaScript</label>
                </div>
            <div className="variant">
                <input name="b31q1" value="Y" onChange={(e) => setb31q1(e.target.value)} type="radio"/>
            <label>Статична типізація та підтримка об'єктно-орієнтованого програмування</label>
                </div>
            <div className="variant">
                <input name="b31q1" value="N" onChange={(e) => setb31q1(e.target.value)} type="radio"/>
            <label>Більш висока швидкодія виконання програми</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яким чином TypeScript компілюється до JavaScript?</p><div className="variants">
            <div className="variant">
                <input name="b31q2" value="N" onChange={(e) => setb31q2(e.target.value)} type="radio"/>
            <label>За допомогою інтерпретації на сервері</label>
                </div>
            <div className="variant">
                <input name="b31q2" value="Y" onChange={(e) => setb31q2(e.target.value)} type="radio"/>
            <label>Використовуючи спеціальний транспілятор</label>
                </div>
            <div className="variant">
                <input name="b31q2" value="N" onChange={(e) => setb31q2(e.target.value)} type="radio"/>
            <label>Шляхом перекладу вихідного коду на JavaScript</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка основна ціль використання TypeScript у проекті?</p><div className="variants">
            <div className="variant">
                <input name="b31q3" value="N" onChange={(e) => setb31q3(e.target.value)} type="radio"/>
            <label>Покращення швидкодії веб-додатків</label>
                </div>
            <div className="variant">
                <input name="b31q3" value="Y" onChange={(e) => setb31q3(e.target.value)} type="radio"/>
            <label>Забезпечення безпеки даних у веб-додатках</label>
                </div>
            <div className="variant">
                <input name="b31q3" value="N" onChange={(e) => setb31q3(e.target.value)} type="radio"/>
            <label>Зменшення розміру вихідного коду веб-додатків</label>
                </div>
                </div>
                </div>
        </div>
    )
}