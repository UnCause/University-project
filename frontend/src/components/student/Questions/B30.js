export default function B30 ({setb30q1, setb30q2, setb30q3}) {

    return (
        <div>
            <div className="question">
                <p>Що таке юніт-тестування (unit testing)?</p><div className="variants">
            <div className="variant">
                <input name="b30q1" value="N" onChange={(e) => setb30q1(e.target.value)} type="radio"/>
            <label>Тестування, яке перевіряє всі аспекти системи в цілому</label>
                </div>
            <div className="variant">
                <input name="b30q1" value="Y" onChange={(e) => setb30q1(e.target.value)} type="radio"/>
            <label>Тестування, яке перевіряє окремі функції або класи програми</label>
                </div>
            <div className="variant">
                <input name="b30q1" value="N" onChange={(e) => setb30q1(e.target.value)} type="radio"/>
            <label>Тестування, яке перевіряє інтеграцію між різними компонентами системи</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яка основна мета функціонального тестування (functional testing)?</p><div className="variants">
            <div className="variant">
                <input name="b30q2" value="N" onChange={(e) => setb30q2(e.target.value)} type="radio"/>
            <label>Перевірка правильності роботи окремих функцій програми</label>
                </div>
            <div className="variant">
                <input name="b30q2" value="Y" onChange={(e) => setb30q2(e.target.value)} type="radio"/>
            <label>Виявлення дефектів та недоліків у програмному продукті</label>
                </div>
            <div className="variant">
                <input name="b30q2" value="N" onChange={(e) => setb30q2(e.target.value)} type="radio"/>
            <label>Визначення швидкості та ефективності програми при великому навантаженні</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Що таке інтеграційне тестування (integration testing)?</p><div className="variants">
            <div className="variant">
                <input name="b30q3" value="N" onChange={(e) => setb30q3(e.target.value)} type="radio"/>
            <label>Тестування функціональності окремих компонентів програми</label>
                </div>
            <div className="variant">
                <input name="b30q3" value="Y" onChange={(e) => setb30q3(e.target.value)} type="radio"/>
            <label>Тестування взаємодії між декількома модулями або системами</label>
                </div>
            <div className="variant">
                <input name="b30q3" value="N" onChange={(e) => setb30q3(e.target.value)} type="radio"/>
            <label>Тестування відповідності програмного коду стандартам програмування</label>
                </div>
                </div>
                </div>
        </div>
    )
}