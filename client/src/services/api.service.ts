import axios from 'axios'

const API_URL = '/api'

export const get = async <T = unknown>(path: string) => {
  try {
    const response = await axios.get<T>(`/${path}`)
    return response.data
  } catch (err) {
    throw new Error(`[API-ERROR]: ${err}`)
  }
}

export const post = async <T = unknown>(path: string, data?: any) => {
  try {
    const response = await axios.post<T>(`${API_URL}/${path}`, data)
    return response.data
  } catch (err) {
    throw new Error(`[API-ERROR]: ${err}`)
  }
}

export const put = async <T = unknown>(path: string, data?: any) => {
  try {
    const response = await axios.put<T>(`${API_URL}/${path}`, data)
    return response.data
  } catch (err) {
    throw new Error(`[API-ERROR]: ${err}`)
  }
}
