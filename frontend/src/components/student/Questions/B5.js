export default function B5 ({setb5q1, setb5q2, setb5q3}) {

    return (
        <div>
            <div className="question">
                <p>Яке з наступних стверджень є правильним щодо C#?</p> 
                <div className="variants">
            <div className="variant">
                <input name="b5q1" value="N" onChange={(e) => setb5q1(e.target.value)} type="radio"/>
            <label>C# є скриптовою мовою програмування.</label>
                </div>
            <div className="variant">
                <input name="b5q1" value="Y" onChange={(e) => setb5q1(e.target.value)} type="radio"/>
            <label>C# є об'єктно-орієнтованою мовою програмування.</label>
                </div>
            <div className="variant">
                <input name="b5q1" value="N" onChange={(e) => setb5q1(e.target.value)} type="radio"/>
            <label>C# є мовою програмування для створення веб-дизайну.</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яке з наступних ключових слів не використовується в C#?</p> 
                <div className="variants">
            <div className="variant">
                <input name="b5q2" value="N" onChange={(e) => setb5q2(e.target.value)} type="radio"/>
            <label>if</label>
                </div>
            <div className="variant">
                <input name="b5q2" value="N" onChange={(e) => setb5q2(e.target.value)} type="radio"/>
            <label>switch</label>
                </div>
            <div className="variant">
                <input name="b5q2" value="Y" onChange={(e) => setb5q2(e.target.value)} type="radio"/>
            <label>fortran</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка з наступних колекцій є вбудованою в мову C#?</p> 
                <div className="variants">
            <div className="variant">
                <input name="b5q3" value="N" onChange={(e) => setb5q3(e.target.value)} type="radio"/>
            <label>ArrayList</label>
                </div>
            <div className="variant">
                <input name="b5q3" value="N" onChange={(e) => setb5q3(e.target.value)} type="radio"/>
            <label>LinkedList</label>
                </div>
            <div className="variant">
                <input name="b5q3" value="Y" onChange={(e) => setb5q3(e.target.value)} type="radio"/>
            <label>List</label>
                </div>
                </div>
                </div>
        </div>
    )
}