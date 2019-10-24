import axios from "axios"

const graphdata = link => {
  axios
    .get(link)
    .then(response => {
      const dataPoints = response.data
      //console.log(dataPoints)
      return dataPoints
    })
    .catch(error => {
      console.log(error)
    })
}

export const dataLink = `http://localhost:3000/data`

export default graphdata
