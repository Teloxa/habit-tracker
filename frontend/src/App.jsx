import { useEffect, useState } from 'react'
import api from './services/api'
import { Button } from '@/components/ui/button'

function App() {
    const [message, setMessage] = useState('')

    useEffect(() => {
        api
            .get('/health')
            .then((res) => setMessage(res.data.status))
            .catch((err) => console.error(err))
    }, [])

    return (
        <main className="min-h-screen bg-background px-6 py-12 text-foreground">
            <section className="mx-auto flex min-h-[70vh] w-full max-w-xl flex-col items-start justify-center gap-6 rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                        shadcn smoke test
                    </p>
                    <h1 className="text-3xl font-semibold tracking-tight">
                        Habit tracker
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Si el botón se ve con estilo y el estado del backend aparece, la base está bien.
                    </p>
                </div>

                <Button onClick={() => window.alert('shadcn button works')}>
                    Probar botón
                </Button>

                <p className="text-sm text-muted-foreground">
                    Backend: {message || 'Loading...'}
                </p>
            </section>
        </main>
    )
}

export default App