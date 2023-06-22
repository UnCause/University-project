export default function B12 ({setb12q1, setb12q2, setb12q3}) {

    return (
        <div>
            <div className="question">
                <p>Що таке Hibernate?</p> <div className="variants">
            <div className="variant">
                <input name="b12q1" value="N" onChange={(e) => setb12q1(e.target.value)} type="radio"/>
            <label>База даних, розроблена компанією Oracle</label>
                </div>
            <div className="variant">
                <input name="b12q1" value="Y" onChange={(e) => setb12q1(e.target.value)} type="radio"/>
            <label>ORM (Object-Relational Mapping) для роботи з базами даних у програмах на Java</label>
                </div>
            <div className="variant">
                <input name="b12q1" value="N" onChange={(e) => setb12q1(e.target.value)} type="radio"/>
            <label>Інструмент для розробки мобільних додатків</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка анотація використовується для встановлення зв'язку між класами в Hibernate?</p> <div className="variants">
            <div className="variant">
                <input name="b12q2" value="N" onChange={(e) => setb12q2(e.target.value)} type="radio"/>
            <label>@Entity</label>
                </div>
            <div className="variant">
                <input name="b12q2" value="N" onChange={(e) => setb12q2(e.target.value)} type="radio"/>
            <label>@Table</label>
                </div>
            <div className="variant">
                <input name="b12q2" value="Y" onChange={(e) => setb12q2(e.target.value)} type="radio"/>
            <label>@Association</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка команда використовується для збереження об'єкта в базі даних за допомогою Hibernate?</p> <div className="variants">
            <div className="variant">
                <input name="b12q3" value="N" onChange={(e) => setb12q3(e.target.value)} type="radio"/>
            <label>save</label>
                </div>
            <div className="variant">
                <input name="b12q3" value="Y" onChange={(e) => setb12q3(e.target.value)} type="radio"/>
            <label>persist</label>
                </div>
            <div className="variant">
                <input name="b12q3" value="N" onChange={(e) => setb12q3(e.target.value)} type="radio"/>
            <label>store</label>
                </div>
                </div>
                </div>
        </div>
    )
}