export default function B19 ({setb19q1, setb19q2, setb19q3}) {

    return (
        <div>
            <div className="question">
                <p>Який інструмент в Node.js використовується для управління залежностями та пакетами?</p> <div className="variants">
            <div className="<variant"></div><input name="b19q1" value="Y" onChange={(e) => setb19q1(e.target.value)} type="radio"/>
            <label>npm</label>
            <div className="<variant"></div><input name="b19q1" value="N" onChange={(e) => setb19q1(e.target.value)} type="radio"/>
            <label>git</label>
            <div className="<variant"></div><input name="b19q1" value="N" onChange={(e) => setb19q1(e.target.value)} type="radio"/>
            <label>webpack</label>
                </div>
                </div>

            <div className="question">
                <p>Що таке Node.js?</p> <div className="variants">
            <div className="<variant"></div><input name="b19q2" value="N" onChange={(e) => setb19q2(e.target.value)} type="radio"/>
            <label>Браузерний фреймворк для розробки веб-додатків.</label>
            <div className="<variant"></div><input name="b19q2" value="Y" onChange={(e) => setb19q2(e.target.value)} type="radio"/>
            <label>Серверна платформа, побудована на JavaScript, для виконання скриптів на стороні сервера.</label>
            <div className="<variant"></div><input name="b19q2" value="N" onChange={(e) => setb19q2(e.target.value)} type="radio"/>
            <label>Мова програмування для розробки мобільних додатків.</label>
                </div>
                </div>

            <div className="question">
                <p>Яка з наступних властивостей Node.js робить його особливо підходящим для реалізації високонавантажених додатків?</p> <div className="variants">
            <div className="<variant"></div><input name="b19q3" value="Y" onChange={(e) => setb19q3(e.target.value)} type="radio"/>
            <label>Асинхронна та подієво-орієнтована архітектура.</label>
            <div className="<variant"></div><input name="b19q3" value="N" onChange={(e) => setb19q3(e.target.value)} type="radio"/>
            <label>Вбудована підтримка мови C++.</label>
            <div className="<variant"></div><input name="b19q3" value="N" onChange={(e) => setb19q3(e.target.value)} type="radio"/>
            <label>Можливість безпосередньо виконувати код JavaScript у браузері.</label>
                </div>
                </div>
        </div>
    )
}