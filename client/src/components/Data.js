import React, { useEffect } from "react"
import axios from "axios"

const Data = () => {
  state = {
    data: [],
  }
  useEffect(() => {
    const getData = async () => {
      const realData = await axios.get(`http://localhost:3000/data`)
      console.log(realData)
    }
    getData()
  }, [])

  return (
    <div>
      <p>Graph Here</p>
    </div>
  )
}

export default Data
