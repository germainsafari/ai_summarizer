import Demo from './components/Search';  // Correct import for Demo component
import Hero from './components/Hero';  // Assuming you might use Hero component later

import './App.css';  // Corrected path for CSS import

const App = () => {
    return (
        <main>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <div>
                <Demo />  
                <Hero />  
            </div>
        </main>
    );
} 

export default App;
