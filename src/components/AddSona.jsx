import React from 'react';
import {useState} from 'react';
import Swal from 'sweetalert2';

const AddSona = ({onSave}) => {
      const [name, setName] = useState('');
      const [description, setDescription] = useState('');
      const [age, setAge] = useState('');
      const [date_of_birth, setDate_of_birth] = useState('');

      const onSubmit = (e) => {
            e.preventDefault();
            if(!name && !description && !age && !date_of_birth){
                  Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Fill in all the fields!'
                  })
            } else if(name && !description && !age && !date_of_birth){
                  Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Fill in all the fields!'
                  })
            } else if(!name && description && !age && !date_of_birth){
                  Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Fill in all the fields!'
                  })
            } else if(!name && !description && age && !date_of_birth){
                  Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Fill in all the fields!'
                  })
            }
            else if(!name && !description && !age && date_of_birth){
                  Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Fill in all the fields!'
                  })
            } else {
                  onSave({name, description, age, date_of_birth});
            }
            setName('');
            setDescription('');
            setAge('');
            setDate_of_birth('');
      }

      return (
            <form className="add-form" onSubmit = {onSubmit}>
                  <div className="form-control">
                        <label>Sona name</label>
                        <input type="text" placeholder="Add Sona" value={name} onChange={(e) => setName(e.target.value)}/>
                  </div>

                  <div className='form-control'>
                        <label>Sona description</label>
                        <input type="text" placeholder="Add Sona description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                  </div>

                  <div className='form-control'>
                        <label>Sona age</label>
                        <input type="text" placeholder="Add Sona age" value={age} onChange={(e) => setAge(e.target.value)}/>
                  </div>

                  <div className='form-control'>
                        <label>Sona date of birth</label>
                        <input type="text" placeholder="Add Sona date of birth" value={date_of_birth} onChange={(e) => setDate_of_birth(e.target.value)}/>
                  </div>
                  <input type="submit" className="btn btn-bock" value="Save sona"/>
            </form>
      )
}

export default AddSona