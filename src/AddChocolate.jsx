import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddChocolate = () => {


    const handleSubmit = event => {
        event.preventDefault();

        
    
        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const category = form.category.value;
        const country = form.country.value;
        
        const submitData = {photo, name, category, country }
        console.log(submitData);


        
    
        fetch('http://localhost:5000/chocolate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('inserted data')
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    
    }

    return (
        <div>
            <div className="mx-10 bg-slate-100 rounded p-10 w-[1200px]">
                <h2 className="text-2xl font-semibold text-center mb-4">Add Chocolate</h2>
                <form onSubmit={handleSubmit} className='text-black'>

                    <div>
                        <div className="mb-4 w-full">
                            <label htmlFor="image" className="block text-gray-600">
                                Image
                            </label>
                            <input
                                type="text"
                                id="photo"
                                name="photo"
                                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                                placeholder="Image URL"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div className="mb-4 w-full">
                            <label htmlFor="name" className="block text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                                placeholder="Chocolate Name"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div className="mb-4 w-full">
                            <label htmlFor="country" className="block text-gray-600">
                                Country
                            </label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                                placeholder="Country of Origin"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4 w-full">
                        <label htmlFor="category" className="block text-gray-600">
                            Category
                        </label>
                        <select id="category" name="category" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400">
                            <option disabled>Select Category</option>
                            <option>Dairy Milk</option>
                            <option>Kitkat</option>
                            <option>Kindar Joy</option>
                            <option>Coffee Co</option>
                        </select>
                    </div>

                    <div className="mt-6">
                        <input
                            type="submit"
                            className="bg-[#D2B48C] text-white px-4 py-2 rounded hover:bg-[#D2B48C] w-full"
                        />
                    </div>
                </form>

                <Link to="/">Back</Link>
            </div>
        </div>
    );
};

export default AddChocolate;
