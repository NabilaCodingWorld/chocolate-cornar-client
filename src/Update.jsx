import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const chocolate = useLoaderData();
    const { photo, name, category, country, _id } = chocolate;

    const handleUpdateChocolate = (event) => {
        event.preventDefault();
        const form = event.target;


        const photo = form.photo.value;
        const name = form.name.value;
        const category = form.category.value;
        const country = form.country.value;
        
        const updatedData = {photo, name, category, country }
        console.log(updatedData)

        fetch(`http://localhost:5000/chocolate/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json', 
            },
            body: JSON.stringify(updatedData),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.modifiedCount > 0) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };

    return (
        <div>
            <div className="mx-10 bg-slate-100 rounded p-10 w-[1200px]">
                <h2 className="text-2xl font-semibold text-center mb-4">Update Chocolate</h2>
                <form onSubmit={handleUpdateChocolate} className='text-black'>
                    <div className="mb-4 w-full">
                        <label htmlFor="photo" className="block text-gray-600">
                            Image
                        </label>
                        <input
                            type="text"
                            id="photo"
                            name="photo"
                            defaultValue={photo}
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                            placeholder="Image URL"
                            required
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="name" className="block text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={name}
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="country" className="block text-gray-600">
                            Country
                        </label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            defaultValue={country}
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                            placeholder="Country"
                            required
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="category" className="block text-gray-600">
                            Category
                        </label>
                        <select
                            className="select select-bordered w-full"
                            id="category"
                            name="category"
                            defaultValue={category}
                        >
                            <option disabled>Pick One</option>
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
                            value="Update Chocolate"
                        />
                    </div>
                </form>
                <br />
                <Link className='font-bold' to="/">Back</Link>
            </div>
        </div>
    );
};

export default Update;
