import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Sidebar} from '../Components'

const Dashboard = () => {

  const [error, setError] = useState('')
  const [privatedata, setPrivatedata] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate('/', {replace:true})
    }
  },[])

  const fetchData = async () => {
    const config = {
      header: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("authToken")}`
      }
    }

    try {
      const { data } = axios.get('/api/private', config)
      setPrivatedata(data.data)
    } catch (error) {
      localStorage.removeItem("authToken")
      setError("You are not authorized ! Please login.")
    }
  }
  return (
    <div>
      <Sidebar/>
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
          <p className="mb-2 text-sm font-semibold text-blue-600">Starter Pages & Examples</p>
          <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">Application Layout: Sidebar & Header using Tailwind CSS</h1>
          <p className="mt-2 text-lg text-gray-800">This is a simple application layout with sidebar and header examples using Tailwind CSS.</p>
          <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          </div>
      </div>
      </div>
  )
}

export default Dashboard
