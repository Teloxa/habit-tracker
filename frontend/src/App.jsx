import {useEffect, useState} from 'react';
import api from './services/api';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        api.get('/health')
        .then(res => setMessage(res.data.status))
        .catch(err => console.error(err));
    }, []);
    return (
        <div>
            <h1>Habit tracker</h1>
            <p>{message || 'Loading...'}</p>
        </div>
    );
}

export default App;