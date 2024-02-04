import React, { useState } from 'react'
import { ethers } from 'ethers';
import { ABI } from '../utils/abi';


const AddDepartment = () => {

  const [departments, setDepartments] = useState(null)

  return (
    <div>
      Add department
    </div>
  )
}

export default AddDepartment
