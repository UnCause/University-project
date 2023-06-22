export default function B15 ({setb15q1, setb15q2, setb15q3}) {

    return (
        <div>
            <div className="question">
                <p>Яка функція використовується для вибору елементу HTML за його ідентифікатором в JavaScript?</p><div className="variants">
            <div className="variant">
                <input name="b15q1" value="N" onChange={(e) => setb15q1(e.target.value)} type="radio"/>
            <label>selectElementById</label>
                </div>
            <div className="variant">
                <input name="b15q1" value="N" onChange={(e) => setb15q1(e.target.value)} type="radio"/>
            <label>getElement</label>
                </div>
            <div className="variant">
                <input name="b15q1" value="Y" onChange={(e) => setb15q1(e.target.value)} type="radio"/>
            <label>document.getElementById</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка функція використовується для виведення даних в консоль в JavaScript?</p><div className="variants">
            <div className="variant">
                <input name="b15q2" value="Y" onChange={(e) => setb15q2(e.target.value)} type="radio"/>
            <label>console.log()</label>
                </div>
            <div className="variant">
                <input name="b15q2" value="N" onChange={(e) => setb15q2(e.target.value)} type="radio"/>
            <label>print()</label>
                </div>
            <div className="variant">
                <input name="b15q2" value="N" onChange={(e) => setb15q2(e.target.value)} type="radio"/>
            <label>output()</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка з наступних команд використовується для виведення повідомлення у вікні в JavaScript?</p><div className="variants">
            <div className="variant">
                <input name="b15q3" value="N" onChange={(e) => setb15q3(e.target.value)} type="radio"/>
            <label>print()</label>
                </div>
            <div className="variant">
                <input name="b15q3" value="N" onChange={(e) => setb15q3(e.target.value)} type="radio"/>
            <label>log()</label>
                </div>
            <div className="variant">
                <input name="b15q3" value="Y" onChange={(e) => setb15q3(e.target.value)} type="radio"/>
            <label>alert()</label>
                </div>
                </div>
                </div>
        </div>
    )
}