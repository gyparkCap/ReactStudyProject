import './App.css';
import Hello from './components/Hello';
import Test from './components/test'; // 'test' 대신 'Test'로 수정
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Switch를 Routes로 변경

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes> {/* Switch 대신 Routes 사용 */}
                    <Route path="/" element={<Hello />} /> {/* component 대신 element prop 사용 */}
                    <Route path="/day" element={<Test />} /> {/* 동일하게 element prop 사용 */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
