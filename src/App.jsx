import React, { useState } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const App = () => {

  const Loadedchocolates = useLoaderData();
  const [chocolates, setChocolates] = useState(Loadedchocolates);

  const handleDelete = (_id) => {
    console.log(_id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/chocolate/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              const updatedChocolate = chocolates.filter(item => item._id !==_id);
              setChocolates(updatedChocolate);

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
      }
    })

  }

  return (
    <div>
      <p className='text-center text-2xl text-white font-bold bg-red-950 py-3 px-4'>Chocolate Management System</p> <br />

      <Link to="/addChocolate" className='border-2 py-2 px-4 ml-10 font-bold rounded-2xl'> + Add Chocolate </Link>

      <div className="overflow-x-auto w-[1000px] ml-48 mt-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Country</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              chocolates.map((chocolate, index) => <tr key={chocolate._id}>


                <td>{index + 1}</td>

                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={chocolate.photo} />
                      </div>
                    </div>

                  </div>
                </td>

                <td>
                  {chocolate.name}
                </td>

                <td>{chocolate.country}</td>

                <th>
                  {chocolate.category}
                </th>


                <th>
                  <div className='flex gap-3'>
                    

                  <Link to={`update/${chocolate._id}`}><FaEdit></FaEdit></Link>

                    <button onClick={() => handleDelete(chocolate._id)}><FaTrashAlt></FaTrashAlt></button>

                  </div>
                </th>
              </tr>)
            }

          </tbody>

        </table> <br /> <br />
      </div>
    </div>
  );
};

export default App;