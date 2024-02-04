import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { ABI } from '../utils/abi';

const AddAdmin = () => {
  const [admins, setAdmins] = useState(null);

  useEffect(() => {
    const getAdmin = async () => {

      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(import.meta.env.VITE_CONTRACT_ADDRESS, ABI, provider);
        const adminAddress = await contract.getCompanyAdmins();
        setAdmins(Object.values(adminAddress))
      } catch (error) {
        console.error("Error fetching the admin addresses :", error)
      }
    };

    getAdmin();
  }, []);

  const handleEdit = (address) => {
    console.log(address)
  }

  const handleDelete = (address) => {
    console.log(address)
  }


  // Function to render the edit and delete buttons
  const renderButtons = (address) => (
    <>
      <button
        type="button"
        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-500 hover:text-red-700 disabled:opacity-50 disabled:pointer-events-none mx-5"
      >
        Delete
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none mx-5"
        onClick={() => handleEdit(address)}
      >
        Edit
      </button>
    </>
  );

  const formatAddress = (address) => {
    const firstThree = address.slice(0, 7);
    const lastThree = address.slice(-3);
    return `${firstThree} ... ${lastThree}`;
  };
  
  return (
    <div className="flex flex-col bg-white p-3 rounded-xl justify-center items-center mx-auto">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div>
            <div className='px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center'>
              <h2 className="text-xl font-semibold text-gray-800">
                Admin
              </h2>
              <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-vertically-centered-modal">
                <svg className="icon icon-tabler icon-tabler-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none" /><line x1="12" x2="12" y1="5" y2="19" /><line x1="5" x2="19" y1="12" y2="12" /></svg>
                Add Admin
              </button>

              {/* Modal code here... */}

            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Address</th>
                  <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {admins &&
                  admins.map((admin, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{formatAddress(admin)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        {renderButtons(admin)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin
