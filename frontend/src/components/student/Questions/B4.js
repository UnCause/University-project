export default function B4 ({setb4q1, setb4q2, setb4q3}) {

    return (
        <div>
            <div className="question">
                <p>Що таке ASP.NET Web API?</p>
                <div className="variants">
            <div className="variant">
                <input name="b4q1" value="N" onChange={(e) => setb4q1(e.target.value)} type="radio"/>
            <label>Фреймворк для створення мобільних додатків на платформі .NET</label>
                </div>
            <div className="variant">
                <input name="b4q1" value="N" onChange={(e) => setb4q1(e.target.value)} type="radio"/>
            <label>Розширення браузера для надання доступу до веб-серверів</label>
                </div>
            <div className="variant">
                <input name="b4q1" value="Y" onChange={(e) => setb4q1(e.target.value)} type="radio"/>
            <label>Фреймворк для створення веб-сервісів та API на платформі .NET</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яке з наступних тверджень є правильним щодо маршрутизації в ASP.NET Web API?</p>
                <div className="variants">
            <div className="variant">
                <input name="b4q2" value="N" onChange={(e) => setb4q2(e.target.value)} type="radio"/>
            <label>Маршрутизація в ASP.NET Web API відбувається тільки за допомогою URL-шляху.</label>
                </div>
            <div className="variant">
                <input name="b4q2" value="Y" onChange={(e) => setb4q2(e.target.value)} type="radio"/>
            <label>Маршрутизацію в ASP.NET Web API можна налаштувати за допомогою атрибутів або конфігураційного файлу.</label>
                </div>
            <div className="variant">
                <input name="b4q2" value="N" onChange={(e) => setb4q2(e.target.value)} type="radio"/>
            <label>ASP.NET Web API не підтримує маршрутизацію.</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яке з наступних тверджень є правильним щодо формату даних, який може бути використаний в ASP.NET Web API?</p>
                <div className="variants">
            <div className="variant">
                <input name="b4q3" value="N" onChange={(e) => setb4q3(e.target.value)} type="radio"/>
            <label>Тільки JSON</label>
                </div>
            <div className="variant">
                <input name="b4q3" value="N" onChange={(e) => setb4q3(e.target.value)} type="radio"/>
            <label>Тільки XML</label>
                </div>
            <div className="variant">
                <input name="b4q3" value="Y" onChange={(e) => setb4q3(e.target.value)} type="radio"/>
            <label>Як JSON, так і XML</label>
                </div>
                </div>
                </div>
        </div>
    )
}