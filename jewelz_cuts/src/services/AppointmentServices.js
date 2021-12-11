import ApiClient from './ApiClient'

export const __UploadAppointment = async (formData, userId) => {
  try {
    const res = await ApiClient.post(`/appts/${userId}/?active=true`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __GetAppointments = async (page, limit) => {
  try {
    const res = await ApiClient.get(
      `/appts?page=${page || 1}&limit=${limit || 10}`
    )
    return res.data
  } catch (error) {
    throw error
  }
}

export const __GetAppointment = async (apptId) => {
  try {
    const res = await ApiClient.get(`/appts/${apptId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __UpdateAppointment = async (formData, apptId) => {
  try {
    const res = await ApiClient.put(`/appts/${apptId}?active=true`, formData)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __DeleteAppointment = async (apptId) => {
  try {
    const res = await ApiClient.delete(`/appts/${apptId}?active=true`)
    return res
  } catch (error) {
    throw error
  }
}


export const __CreateAppointment = async (formData, userId, apptId) => {
  try {
    const res = await ApiClient.post(`/appt/create/${userId}`, formData)
    return res.data
  } catch (error) {
      throw error
  }
}