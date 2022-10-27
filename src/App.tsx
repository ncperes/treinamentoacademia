import './App.css';
import Logo from './components/Logo';
import Form from './components/Form';
import HeaderButtons from './components/HeaderButtons';

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <Logo />
        <HeaderButtons />
      </div>
      <br></br>
      <Form />
    </div>
  );
}
