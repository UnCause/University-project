export default function B17 ({setb17q1, setb17q2, setb17q3}) {

    return (
        <div>
            <div className="question">
                <p>Що таке MongoDB?</p><div className="variants">
            <div className="variant">
                <input name="b17q1" value="N" onChange={(e) => setb17q1(e.target.value)} type="radio"/>
            <label>Реляційна база даних, яка використовує SQL-запити.</label>
                </div>
            <div className="variant">
                <input name="b17q1" value="Y" onChange={(e) => setb17q1(e.target.value)} type="radio"/>
            <label>NoSQL база даних, яка використовує документи у форматі JSON.</label>
                </div>
            <div className="variant">
                <input name="b17q1" value="N" onChange={(e) => setb17q1(e.target.value)} type="radio"/>
            <label>Протокол для передачі даних через мережу.</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка операція використовується для додавання документу в колекцію MongoDB?</p>
            <div className="variant">
                <input name="b17q2" value="N" onChange={(e) => setb17q2(e.target.value)} type="radio"/>
            <label>ADD</label>
                </div>
            <div className="variant">
                <input name="b17q2" value="N" onChange={(e) => setb17q2(e.target.value)} type="radio"/>
            <label>INSERT</label>
                </div>
            <div className="variant">
                <input name="b17q2" value="Y" onChange={(e) => setb17q2(e.target.value)} type="radio"/>
            <label>INSERTONE</label>
                </div>
                </div>

            <div className="question">
                <p>Яка з наступних команд використовується для пошуку документів у колекції MongoDB?</p>
            <div className="variant">
                <input name="b17q3" value="Y" onChange={(e) => setb17q3(e.target.value)} type="radio"/>
            <label>FIND</label>
                </div>
            <div className="variant">
                <input name="b17q3" value="N" onChange={(e) => setb17q3(e.target.value)} type="radio"/>
            <label>SEARCH</label>
                </div>
            <div className="variant">
                <input name="b17q3" value="N" onChange={(e) => setb17q3(e.target.value)} type="radio"/>
            <label>FINDONE</label>
                </div>
                </div>
        </div>
    )
}