import './App.css';
import {students} from './data/StudentsDb';
import StudentTable from './components/StudentTable';
import {useState} from 'react';

function App() {
  const [fontSize,setFontSize]=useState(16);
  return (
    <div className="App">
      <h1>Student Information Portal</h1>
      <hr/>
      <div style={{ fontSize: `${fontSize}px` }} className='App'>
      <div className='buttons'>
          fontSize : 
          <button onClick={() => setFontSize(16)}>S</button>
          <button onClick={() => setFontSize(20)}>M</button>
          <button onClick={() => setFontSize(24)}>L</button>
      </div>  
      <hr/>
      <table width="100%">
        <tbody>
        <tr>
          <td>
             <StudentTable students={students}/>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default App;
