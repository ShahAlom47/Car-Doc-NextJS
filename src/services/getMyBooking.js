export const getMyBookings = async (email) => {

    const res = await fetch(`http://localhost:3000/api/services/my-booking/${email}`)
    const data = await res.json()
   
    return data
}
export const getUpdateBookings = async (id) => {

    const res = await fetch(`http://localhost:3000/api/services/my-booking/delete/${id}`)
    const data = await res.json()
   
    return data
}