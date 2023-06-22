export default function B27 ({setb27q1, setb27q2, setb27q3}) {

    return (
        <div>
            <div className="question">
                <p>Яке правило SOLID стверджує, що клас повинен мати лише одну причину для зміни?</p><div className="variants">
            <div className="variant">
                <input name="b27q1" value="Y" onChange={(e) => setb27q1(e.target.value)} type="radio"/>
            <label>Single Responsibility Principle</label>
                </div>
            <div className="variant">
                <input name="b27q1" value="N" onChange={(e) => setb27q1(e.target.value)} type="radio"/>
            <label>Open/Closed Principle</label>
                </div>
            <div className="variant">
                <input name="b27q1" value="N" onChange={(e) => setb27q1(e.target.value)} type="radio"/>
            <label>Liskov Substitution Principle</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Яке правило SOLID стверджує, що програмні сутності повинні залежати від абстракцій, а не від конкретних реалізацій?</p><div className="variants">
            <div className="variant">
                <input name="b27q2" value="N" onChange={(e) => setb27q2(e.target.value)} type="radio"/>
            <label>Open/Closed Principle</label>
                </div>
            <div className="variant">
                <input name="b27q2" value="N" onChange={(e) => setb27q2(e.target.value)} type="radio"/>
            <label>Liskov Substitution Principle</label>
                </div>
            <div className="variant">
                <input name="b27q2" value="Y" onChange={(e) => setb27q2(e.target.value)} type="radio"/>
            <label>Dependency Inversion Principle</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Який принцип SOLID закликає до розділення великих інтерфейсів на менші та специфічніші?</p><div className="variants">
            <div className="variant">
                <input name="b27q3" value="Y" onChange={(e) => setb27q3(e.target.value)} type="radio"/>
            <label>Interface Segregation Principle</label>
                </div>
            <div className="variant">
                <input name="b27q3" value="N" onChange={(e) => setb27q3(e.target.value)} type="radio"/>
            <label>Liskov Substitution Principle</label>
                </div>
            <div className="variant">
                <input name="b27q3" value="N" onChange={(e) => setb27q3(e.target.value)} type="radio"/>
            <label>Open/Closed Principle</label>
                </div>
                </div>
                </div>
        </div>
    )
}