import {
    ArrowUpRight,
    ChartLineUp,
    CheckCircle,
    Fire,
    Sun,
} from '@phosphor-icons/react'

const habits = [
    { name: 'Beber agua', category: 'Salud', completed: true },
    { name: 'Leer 20 minutos', category: 'Crecimiento', completed: true },
    { name: 'Caminar', category: 'Movimiento', completed: true },
    { name: 'Dormir temprano', category: 'Descanso', completed: false },
]

const week = [
    { day: 'L', date: '18', completed: true },
    { day: 'M', date: '19', completed: true },
    { day: 'X', date: '20', completed: true },
    { day: 'J', date: '21', completed: true, current: true },
    { day: 'V', date: '22', completed: false },
    { day: 'S', date: '23', completed: false },
    { day: 'D', date: '24', completed: false },
]

const completedHabits = habits.filter((habit) => habit.completed).length
const completionRate = Math.round((completedHabits / habits.length) * 100)

function App() {
    return (
        <main className="min-h-screen bg-[#f4f1ea] px-5 py-8 text-[#1d2924] sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">
                <header className="mb-10 flex flex-col gap-8 border-b border-[#d8d6ce] pb-8 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#718077]">
                            <Sun size={17} weight="duotone" />
                            <span>Jueves, 21 de agosto</span>
                        </div>
                        <h1 className="max-w-2xl font-sans text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                            Buenos días, Alex<span className="text-[#d16b4b]">.</span>
                        </h1>
                        <p className="mt-3 max-w-md text-sm leading-6 text-[#718077]">
                            Un pequeño paso cada día construye algo grande.
                        </p>
                    </div>

                    <div className="w-full max-w-xs border-l-2 border-[#d16b4b] pl-4">
                        <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[#718077]">
                            <span>Semana 34</span>
                            <span className="font-semibold text-[#1d2924]">57%</span>
                        </div>
                        <div className="h-2 bg-[#dcded5]">
                            <div className="h-full w-[57%] bg-[#d16b4b]" />
                        </div>
                        <p className="mt-2 text-xs text-[#718077]">Vas mejor que la semana pasada</p>
                    </div>
                </header>

                <section aria-labelledby="summary-title">
                    <div className="mb-4 flex items-end justify-between">
                        <div>
                            <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#718077]">Tu ritmo</p>
                            <h2 id="summary-title" className="font-sans text-2xl font-semibold tracking-[-0.03em]">Resumen semanal</h2>
                        </div>
                        <ChartLineUp size={25} weight="duotone" className="text-[#d16b4b]" />
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        <article className="border border-[#d8d6ce] bg-[#fbfaf6] p-5">
                            <div className="mb-8 flex items-start justify-between">
                                <span className="text-xs uppercase tracking-[0.14em] text-[#718077]">Completados</span>
                                <CheckCircle size={22} weight="duotone" className="text-[#4f806d]" />
                            </div>
                            <p className="font-sans text-4xl font-semibold tracking-[-0.05em]">{completedHabits}<span className="ml-1 text-2xl text-[#9da79f]">/ {habits.length}</span></p>
                            <p className="mt-2 text-xs text-[#718077]">hábitos de hoy</p>
                        </article>

                        <article className="border border-[#d8d6ce] bg-[#fbfaf6] p-5">
                            <div className="mb-8 flex items-start justify-between">
                                <span className="text-xs uppercase tracking-[0.14em] text-[#718077]">Racha actual</span>
                                <Fire size={22} weight="duotone" className="text-[#d16b4b]" />
                            </div>
                            <p className="font-sans text-4xl font-semibold tracking-[-0.05em]">12 <span className="text-2xl text-[#9da79f]">días</span></p>
                            <p className="mt-2 text-xs text-[#718077]">Tu mejor racha: 18 días</p>
                        </article>

                        <article className="border border-[#d8d6ce] bg-[#1d2924] p-5 text-[#fbfaf6]">
                            <div className="mb-8 flex items-start justify-between">
                                <span className="text-xs uppercase tracking-[0.14em] text-[#aab8ae]">Cumplimiento</span>
                                <ArrowUpRight size={22} weight="bold" className="text-[#e9a083]" />
                            </div>
                            <p className="font-sans text-4xl font-semibold tracking-[-0.05em]">{completionRate}%</p>
                            <p className="mt-2 text-xs text-[#aab8ae]">+8% frente a la semana anterior</p>
                        </article>
                    </div>
                </section>

                <section className="mt-10 grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
                    <div className="border border-[#d8d6ce] bg-[#fbfaf6] p-5">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="font-sans text-xl font-semibold tracking-[-0.03em]">Esta semana</h2>
                            <span className="text-xs text-[#718077]">4 de 7 días</span>
                        </div>
                        <div className="grid grid-cols-7 gap-2 sm:gap-4">
                            {week.map((item) => (
                                <div key={item.date} className={`flex flex-col items-center gap-2 border-t-2 pt-3 ${item.current ? 'border-[#d16b4b]' : 'border-transparent'}`}>
                                    <span className="text-xs uppercase text-[#718077]">{item.day}</span>
                                    <span className={`flex size-9 items-center justify-center text-sm ${item.completed ? 'bg-[#dce9df] text-[#35614e]' : 'bg-[#eeece5] text-[#9da79f]'}`}>{item.date}</span>
                                    <span className={`size-1.5 ${item.completed ? 'bg-[#4f806d]' : 'bg-[#d0d0c8]'}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border border-[#d8d6ce] bg-[#dce9df] p-5">
                        <p className="mb-6 text-xs uppercase tracking-[0.14em] text-[#4f806d]">Enfoque de hoy</p>
                        <p className="font-sans text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#1d2924]">La constancia gana al impulso.</p>
                        <div className="mt-10 border-t border-[#b9d0c0] pt-3 text-xs text-[#4f806d]">03 hábitos restantes</div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default App