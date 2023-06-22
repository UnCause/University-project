export default function B14 ({setb14q1, setb14q2, setb14q3}) {

    return (
        <div>
            <div className="question">
                <p>Яке з наступних тверджень є правильною щодо Java?</p> <div className="variants">
            <div className="variant">
                <input name="b14q1" value="Y" onChange={(e) => setb14q1(e.target.value)} type="radio"/>
            <label>Java є компіляційною мовою програмування.</label>
                </div>
            <div className="variant">
                <input name="b14q1" value="N" onChange={(e) => setb14q1(e.target.value)} type="radio"/>
            <label>Java є інтерпретованою мовою програмування.</label>
                </div>
            <div className="variant">
                <input name="b14q1" value="N" onChange={(e) => setb14q1(e.target.value)} type="radio"/>
            <label>Java є мовою для розробки мобільних додатків.</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка з наступних команд використовується для компіляції Java-програми?</p> <div className="variants">
            <div className="variant">
                <input name="b14q2" value="N" onChange={(e) => setb14q2(e.target.value)} type="radio"/>
            <label>run</label>
                </div>
            <div className="variant">
                <input name="b14q2" value="N" onChange={(e) => setb14q2(e.target.value)} type="radio"/>
            <label>execute</label>
                </div>
            <div className="variant">
                <input name="b14q2" value="Y" onChange={(e) => setb14q2(e.target.value)} type="radio"/>
            <label>javac</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка конструкція використовується для створення об'єкта в Java?</p> <div className="variants">
            <div className="variant">
                <input name="b14q3" value="Y" onChange={(e) => setb14q3(e.target.value)} type="radio"/>
            <label>new</label>
                </div>
            <div className="variant">
                <input name="b14q3" value="N" onChange={(e) => setb14q3(e.target.value)} type="radio"/>
            <label>create</label>
                </div>
            <div className="variant">
                <input name="b14q3" value="N" onChange={(e) => setb14q3(e.target.value)} type="radio"/>
            <label>make</label>
                </div>
                </div>
                </div>
        </div>
    )
}