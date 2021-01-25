import axios from 'axios'

export default {

  fetchMovieCollection (name) {
    return axios.get('&s=' + name)
      .then(response => {
        return response.data
      })
  },

  async fetchSingleMovie (id) {
    const response = await axios.get('&i=' + id)
    return response.data
  }
}
