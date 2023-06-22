export default function B16 ({setb16B16q1, setb16B16q2, setb16B16q3}) {

    return (
        <div>
            <div className="question">
                <p>Яка функція використовується для вибору HTML-елементу за допомогою селектора в jQuery?</p><div className="variants">
            <div className="variant">
                <input name="16q1" value="N" onChange={(e) => setb16B16q1(e.target.value)} type="radio"/>
            <label>select()</label>
                </div>
            <div className="variant">
                <input name="16q1" value="N" onChange={(e) => setb16B16q1(e.target.value)} type="radio"/>
            <label>find()</label>
                </div>
            <div className="variant">
                <input name="16q1" value="Y" onChange={(e) => setb16B16q1(e.target.value)} type="radio"/>
            <label>$()</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка з наступних команд jQuery використовується для зміни CSS-стилів елементу?</p><div className="variants">
            <div className="variant">
                <input name="16q2" value="N" onChange={(e) => setb16B16q2(e.target.value)} type="radio"/>
            <label>addClass()</label>
                </div>
            <div className="variant">
                <input name="16q2" value="N" onChange={(e) => setb16B16q2(e.target.value)} type="radio"/>
            <label>toggle()</label>
                </div>
            <div className="variant">
                <input name="16q2" value="Y" onChange={(e) => setb16B16q2(e.target.value)} type="radio"/>
            <label>css()</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка функція використовується в jQuery для прикріплення подій до елементів?</p><div className="variants">
            <div className="variant">
                <input name="16q3" value="N" onChange={(e) => setb16B16q3(e.target.value)} type="radio"/>
            <label>addEvent()</label>
                </div>
            <div className="variant">
                <input name="16q3" value="N" onChange={(e) => setb16B16q3(e.target.value)} type="radio"/>
            <label>attachEvent</label>
                </div>
            <div className="variant">
                <input name="16q3" value="Y" onChange={(e) => setb16B16q3(e.target.value)} type="radio"/>
            <label>on()</label>
                </div>
                </div>
                </div>
        </div>
    )
}