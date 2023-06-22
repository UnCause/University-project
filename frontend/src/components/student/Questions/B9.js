export default function B9 ({setb9q1, setb9q2, setb9q3}) {

    return (
        <div>
            <div className="question">
                <p>Що таке Entity Framework?</p> <div className="variants">
            <div className="variant">
                <input name="b9q1" value="N" onChange={(e) => setb9q1(e.target.value)} type="radio"/>
            <label>Інструмент для створення веб-сайтів на платформі .NET</label>
                </div>
            <div className="variant">
                <input name="b9q1" value="N" onChange={(e) => setb9q1(e.target.value)} type="radio"/>
            <label>СУБД, розроблена компанією Microsoft</label>
                </div>
            <div className="variant">
                <input name="b9q1" value="Y" onChange={(e) => setb9q1(e.target.value)} type="radio"/>
            <label>ORM (Object-Relational Mapping) для роботи з базами даних у програмах .NET</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яке з наступних тверджень є правильною щодо Entity Framework Code First?</p> <div className="variants">
            <div className="variant">
                <input name="b9q2" value="N" onChange={(e) => setb9q2(e.target.value)} type="radio"/>
            <label>Для створення бази даних використовується готова схема бази даних.</label>
                </div>
            <div className="variant">
                <input name="b9q2" value="Y" onChange={(e) => setb9q2(e.target.value)} type="radio"/>
            <label>База даних створюється на основі моделі даних із коду.</label>
                </div>
            <div className="variant">
                <input name="b9q2" value="N" onChange={(e) => setb9q2(e.target.value)} type="radio"/>
            <label>Entity Framework не підтримує роботу з кодом.</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка з наступних команд використовується для вибірки даних з бази даних за допомогою Entity Framework?</p> <div className="variants">
            <div className="variant">
                <input name="b9q3" value="N" onChange={(e) => setb9q3(e.target.value)} type="radio"/>
            <label>SELECT</label>
                </div>
            <div className="variant">
                <input name="b9q3" value="N" onChange={(e) => setb9q3(e.target.value)} type="radio"/>
            <label>GET</label>
                </div>
            <div className="variant">
                <input name="b9q3" value="Y" onChange={(e) => setb9q3(e.target.value)} type="radio"/>
            <label>LINQ</label>
                </div>
                </div>
                </div>
        </div>
    )
}