import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [modal, setModal] = useState(false);

  const onDismissModal = () => {
    setModal(false);
  };

  const onShowModal = () => {
    setModal(true);
  };

  return (
    <>
      <div className="todo-container">
        <div className="card">
          <div className="card-content">
            <h2>Learn React</h2>
            <button className="btn" onClick={onShowModal}>
              Done
            </button>
          </div>
        </div>
      </div>
      {modal && <Modal onDismissModal={onDismissModal}/>}
    </>
  );
}

export default App;