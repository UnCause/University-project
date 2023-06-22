export default function B25 ({setb25q1, setb25q2, setb25q3}) {

    return (
        <div>
            <div className="question">
                <p>Яка основна відмінність між символьними рядками ('string') та рядками ("string") в Ruby?</p><div className="variants">
            <div className="variant">
                <input name="b25q1" value="Y" onChange={(e) => setb25q1(e.target.value)} type="radio"/>
            <label>Символьні рядки не можна змінювати, а рядки можна змінювати</label>
                </div>
            <div className="variant">
                <input name="b25q1" value="N" onChange={(e) => setb25q1(e.target.value)} type="radio"/>
            <label>Символьні рядки не можна виводити на екран, а рядки можна виводити на екран</label>
                </div>
            <div className="variant">
                <input name="b25q1" value="N" onChange={(e) => setb25q1(e.target.value)} type="radio"/>
            <label>Символьні рядки можна використовувати тільки в умовних виразах, а рядки можна використовувати скрізь</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка основна особливість Ruby, яка використовується для покращення зрозумілості коду?</p><div className="variants">
            <div className="variant">
                <input name="b25q2" value="N" onChange={(e) => setb25q2(e.target.value)} type="radio"/>
            <label>Використання ключових слів</label>
                </div>
            <div className="variant">
                <input name="b25q2" value="Y" onChange={(e) => setb25q2(e.target.value)} type="radio"/>
            <label>Індентування</label>
                </div>
            <div className="variant">
                <input name="b25q2" value="N" onChange={(e) => setb25q2(e.target.value)} type="radio"/>
            <label>Використання блоків коду</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка особливість Ruby дозволяє програмістам змінювати функціональність вбудованих класів?</p><div className="variants">
            <div className="variant">
                <input name="b25q3" value="Y" onChange={(e) => setb25q3(e.target.value)} type="radio"/>
            <label>Розширення класів</label>
                </div>
            <div className="variant">
                <input name="b25q3" value="N" onChange={(e) => setb25q3(e.target.value)} type="radio"/>
            <label>Унаслідування класів</label>
                </div>
            <div className="variant">
                <input name="b25q3" value="N" onChange={(e) => setb25q3(e.target.value)} type="radio"/>
            <label>Поліморфізм класів</label>
                </div>
                </div>
                </div>
        </div>
    )
}