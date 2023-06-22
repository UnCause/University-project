export default function B8 ({setb8q1, setb8q2, setb8q3}) {

    return (
        <div>
            <div className="questions">
                <p>Яка з наступних конструкцій використовується для вибору елементів за їх класом в CSS?</p> <div className="variants">
            <div className="variant">
                <input name="b8q1" value="N" onChange={(e) => setb8q1(e.target.value)} type="radio"/>
            <label>#</label>
                </div>
            <div className="variant">
                <input name="b8q1" value="Y" onChange={(e) => setb8q1(e.target.value)} type="radio"/>
            <label>.</label>
                </div>
            <div className="variant">
                <input name="b8q1" value="N" onChange={(e) => setb8q1(e.target.value)} type="radio"/>
            <label>:</label>
                </div>
                </div>
                </div>

            <div className="questions">
                <p>Яка з наступних властивостей використовується для задання відстані між елементами в CSS?</p> <div className="variants">
            <div className="variant">
                <input name="b8q2" value="Y" onChange={(e) => setb8q2(e.target.value)} type="radio"/>
            <label>margin</label>
                </div>
            <div className="variant">
                <input name="b8q2" value="N" onChange={(e) => setb8q2(e.target.value)} type="radio"/>
            <label>padding</label>
                </div>
            <div className="variant">
                <input name="b8q2" value="N" onChange={(e) => setb8q2(e.target.value)} type="radio"/>
            <label>width</label>
                </div>
                </div>
                </div>

            <div className="questions">
                <p>Яка властивість CSS використовується для зміни кольору тексту?</p> <div className="variants">
            <div className="variant">
                <input name="b8q3" value="N" onChange={(e) => setb8q3(e.target.value)} type="radio"/>
            <label>background-color</label>
                </div>
            <div className="variant">
                <input name="b8q3" value="Y" onChange={(e) => setb8q3(e.target.value)} type="radio"/>
            <label>color</label>
                </div>
            <div className="variant">
                <input name="b8q3" value="N" onChange={(e) => setb8q3(e.target.value)} type="radio"/>
            <label>font-color</label>
                </div>
                </div>
                </div>
        </div>
    )
}