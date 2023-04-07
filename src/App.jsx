import Header from './components/Header';
import Sonas from './components/Sonas';
import AddSona from './components/AddSona';
import Sona from './components/Sona';

import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';

function App() {
  //states
  const [loading, setLoading] = useState(true);
  const [sonas, setSonas] = useState([]); //task state
  const [showAddSona, setShowAddSona] = useState(false);// to reveal add task form

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  //fetching data from local storage
  const getSonas = JSON.parse(localStorage.getItem("sonaAdded"));
  useEffect(() => {
    if (getSonas == null) {
      setSonas([]);
    } else {
      setSonas(getSonas);
    }
  }, [])

  //add sona
  const addSona = (sona) => {
    const id = uuidv4();
    const newSona = { id, ...sona };
    setSonas([...sonas, newSona]);
    Swal.fire({
      icon: 'success',
      title: 'Sona added succesfully!',
      text: 'You can now add more sonas or edit the one you just added',
    });
    localStorage.setItem('sonaAdded', JSON.stringify([...sonas, newSona]));
  }

  //delete sona
  const deleteSona = (id) => {
    const deleteSona = sonas.filter((sona) => sona.id !== id);
    setSonas(deleteSona);
    Swal.fire({
      icon: 'success',
      title: 'Sona deleted succesfully!',
      text: 'Your sona has been deleted',
    });
    localStorage.setItem("sonaAdded", JSON.stringify(deleteSona));
  }

  //edit sona
  const editSona = (id) => {
    const name = prompt("Sona name");
    const description = prompt("Description");
    const age = prompt("Age");
    const date_of_birth = prompt("Date_of_birth");

    const data = sonas.map(x => {
      if (x.id === id) {
        return {
          ...x,
          name: name,
          description: description,
          age: age,
          date_of_birth: date_of_birth,
          id: uuidv4()
        }
      }

      return x;
    });
    Swal.fire({
      icon: 'success',
      title: 'Yay!!!',
      text: 'Sona updated succesfully'
    });
    localStorage.setItem("sonaAdded", JSON.stringify(data));
  }

  return (
    <>
      {
        loading ?
          <div className='spinnerContainer'>
            <div className='spinner-grow text-primary' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>

            <div className='spinner-grow text-secondary' role='status'>
              <span className='visuallyHidden'>Loading...</span>
            </div>

            <div className="spinner-grow text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>

            <div className="spinner-grow text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>

            <div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div> :
          <div className='container'>
            {/*app header*/}
            <Header showForm={() => setShowAddSona(!showAddSona)} changeTextAndColor={showAddSona} />

            {/*reveal add sona form*/}
            {showAddSona && <AddSona onSave={addSona} />}

            {/*show sonas*/}
            {
              sonas.length > 0 ?
                (<Sonas sonas={sonas} onDelete={deleteSona} onEdit={editSona} />) : ('No sonas found')
            }
          </div>
      }
    </>
  );
}

export default App;