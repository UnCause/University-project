export default function B7 ({setb7q1, setb7q2, setb7q3}) {

    return (
        <div>
            <div className="question">
                <p>Які з наступних мов програмування підтримуються CMake?</p> 
                <div className="variants">
            <div className="variant">
                <input name="b7q1" value="N" onChange={(e) => setb7q1(e.target.value)} type="radio"/>
            <label>Тільки C++</label>
                </div>
            <div className="variant">
                <input name="b7q1" value="Y" onChange={(e) => setb7q1(e.target.value)} type="radio"/>
            <label>C++ та Python</label>
                </div>
            <div className="variant">
                <input name="b7q1" value="N" onChange={(e) => setb7q1(e.target.value)} type="radio"/>
            <label>C++, Python та Java</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка з наступних команд використовується для генерації проекту з використанням CMake?</p> 
                <div className="variants">
            <div className="variant">
                <input name="b7q2" value="N" onChange={(e) => setb7q2(e.target.value)} type="radio"/>
            <label>cmake --build</label>
                </div>
            <div className="variant">
                <input name="b7q2" value="N" onChange={(e) => setb7q2(e.target.value)} type="radio"/>
            <label>cmake --generate</label>
                </div>
            <div className="variant">
                <input name="b7q2" value="Y" onChange={(e) => setb7q2(e.target.value)} type="radio"/>
            <label>cmake --configure</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка команда використовується для створення виконуваного файлу з використанням CMake?</p> 
                <div className="variants">
            <div className="variant">
                <input name="b7q3" value="N" onChange={(e) => setb7q3(e.target.value)} type="radio"/>
            <label>build</label>
                </div>
            <div className="variant">
                <input name="b7q3" value="Y" onChange={(e) => setb7q3(e.target.value)} type="radio"/>
            <label>make</label>
                </div>
            <div className="variant">
                <input name="b7q3" value="N" onChange={(e) => setb7q3(e.target.value)} type="radio"/>
            <label>cmake</label>
                </div>
                </div>
                </div>
        </div>
    )
}