export default function B26 ({setb26q1, setb26q2, setb26q3}) {

    return (
        <div>
            <div className="question">
                <p>Які основні ролі існують у Scrum?</p><div className="variants">
            <div className="variant">
                <input name="b26q1" value="N" onChange={(e) => setb26q1(e.target.value)} type="radio"/>
            <label>Спринтери, проекти та клієнти</label>
                </div>
            <div className="variant">
                <input name="b26q1" value="Y" onChange={(e) => setb26q1(e.target.value)} type="radio"/>
            <label>Власник продукту, Скрам-мастер та Розробники</label>
                </div>
            <div className="variant">
                <input name="b26q1" value="N" onChange={(e) => setb26q1(e.target.value)} type="radio"/>
            <label>Менеджери, аналітики та тестувальники</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Які основні складові частини Scrum-процесу?</p><div className="variants">
            <div className="variant">
                <input name="b26q2" value="N" onChange={(e) => setb26q2(e.target.value)} type="radio"/>
            <label>Спринти, ретроспективи та управління ризиками</label>
                </div>
            <div className="variant">
                <input name="b26q2" value="N" onChange={(e) => setb26q2(e.target.value)} type="radio"/>
            <label>Збори, документація та звітність</label>
                </div>
            <div className="variant">
                <input name="b26q2" value="Y" onChange={(e) => setb26q2(e.target.value)} type="radio"/>
            <label>Планування спринту, щоденні стендапи та огляди спринту</label>
                </div>
                </div>
                </div>

            <div className="question">
                <p>Який принцип базується на ітеративному підході в Scrum?</p><div className="variants">
            <div className="variant">
                <input name="b26q3" value="N" onChange={(e) => setb26q3(e.target.value)} type="radio"/>
            <label>Continuous Integration</label>
                </div>
            <div className="variant">
                <input name="b26q3" value="Y" onChange={(e) => setb26q3(e.target.value)} type="radio"/>
            <label>Incremental Development</label>
                </div>
            <div className="variant">
                <input name="b26q3" value="N" onChange={(e) => setb26q3(e.target.value)} type="radio"/>
            <label>Waterfall Model</label>
                </div>
                </div>
                </div>
        </div>
    )
}