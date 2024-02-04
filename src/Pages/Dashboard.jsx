import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { Sidebar } from '../Components'

const Dashboard = () => {

  const [error, setError] = useState('')
  const [privatedata, setPrivatedata] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate('/', { replace: true })
    }
  }, [])

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
      <div>
        
      </div>
    </div>
  )
}

export default Dashboard
