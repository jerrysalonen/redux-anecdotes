import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createNew = async content => {
  const data = { content, votes: 0 }
  const res = await axios.post(baseUrl, data)
  return res.data
}

const vote = async id => {
  let data = await axios.get(`${baseUrl}/${id}`)
  data = {...data.data, votes: data.data.votes + 1}
  await axios.put(`${baseUrl}/${id}`, data)
}

export default {
  getAll,
  createNew,
  vote
}