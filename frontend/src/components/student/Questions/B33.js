export default function B33 ({setb33q1, setb33q2, setb33q3}) {

    return (
        <div>
            <div className="question">
                <p>Яка концепція лежить в основі Vue.js?</p><div className="variants">
            <div className="variant">
                <input name="b33q1" value="N" onChange={(e) => setb33q1(e.target.value)} type="radio"/>
            <label>Віртуальний DOM</label>
                </div>
            <div className="variant">
                <input name="b33q1" value="Y" onChange={(e) => setb33q1(e.target.value)} type="radio"/>
            <label>Компонентний підхід</label>
                </div>
            <div className="variant">
                <input name="b33q1" value="N" onChange={(e) => setb33q1(e.target.value)} type="radio"/>
            <label>Функціональне програмування</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Які можливості надає Vue.js для роботи з даними?</p><div className="variants">
            <div className="variant">
                <input name="b33q2" value="Y" onChange={(e) => setb33q2(e.target.value)} type="radio"/>
            <label>Реактивність та двостороннє зв'язування</label>
                </div>
            <div className="variant">
                <input name="b33q2" value="N" onChange={(e) => setb33q2(e.target.value)} type="radio"/>
            <label>Асинхронні запити на сервер</label>
                </div>
            <div className="variant">
                <input name="b33q2" value="N" onChange={(e) => setb33q2(e.target.value)} type="radio"/>
            <label>Маніпуляція DOM-елементами</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Що таке "реактивність" у контексті Vue.js?</p><div className="variants">
            <div className="variant">
                <input name="b33q3" value="Y" onChange={(e) => setb33q3(e.target.value)} type="radio"/>
            <label>Можливість відстежування та реагування на зміни даних</label>
                </div>
            <div className="variant">
                <input name="b33q3" value="N" onChange={(e) => setb33q3(e.target.value)} type="radio"/>
            <label>Технологія для побудови анімаційних ефектів</label>
                </div>
            <div className="variant">
                <input name="b33q3" value="N" onChange={(e) => setb33q3(e.target.value)} type="radio"/>
            <label>Методологія для організації коду у Vue.js проектах</label>
                </div>
                </div>
                </div>
        </div>
    )
}