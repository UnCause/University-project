export default function B6 ({setb6q1, setb6q2, setb6q3}) {

    return (
        <div>
            <div className="question">
                <p>Яке з наступних тверджень є правильною щодо C++?</p> 
                <div className="variants">
            <div className="variant">
                <input name="b6q1" value="N" onChange={(e) => setb6q1(e.target.value)} type="radio"/>
            <label>C++ є мовою програмування, яка використовується тільки для веб-розробки.</label>
                </div>
            <div className="variant">
                <input name="b6q1" value="N" onChange={(e) => setb6q1(e.target.value)} type="radio"/>
            <label>C++ є мовою програмування, розробленою компанією Microsoft.</label>
                </div>
            <div className="variant">
                <input name="b6q1" value="Y" onChange={(e) => setb6q1(e.target.value)} type="radio"/>
            <label>C++ є універсальною мовою програмування, яка використовується для розробки різноманітних програм та додатків.</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка з наступних конструкцій використовується для введення даних з клавіатури в C++?</p> 
                <div className="variants">
            <div className="variant">
                <input name="b6q2" value="Y" onChange={(e) => setb6q2(e.target.value)} type="radio"/>
            <label>scanf()</label>
                </div>
            <div className="variant">
                <input name="b6q2" value="N" onChange={(e) => setb6q2(e.target.value)} type="radio"/>
            <label>print()</label>
                </div>
            <div className="variant">
                <input name="b6q2" value="N" onChange={(e) => setb6q2(e.target.value)} type="radio"/>
            <label>input()</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка з наступних конструкцій використовується для циклічного виконання блоку коду в C++?</p> 
                <div className="variants">
            <div className="variant">
                <input name="b6q3" value="N" onChange={(e) => setb6q3(e.target.value)} type="radio"/>
            <label>if-else</label>
                </div>
            <div className="variant">
                <input name="b6q3" value="Y" onChange={(e) => setb6q3(e.target.value)} type="radio"/>
            <label>for</label>
                </div>
            <div className="variant">
                <input name="b6q3" value="N" onChange={(e) => setb6q3(e.target.value)} type="radio"/>
            <label>switch</label>
                </div>
                </div>
                </div>
        </div>
    )
}