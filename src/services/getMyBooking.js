export const getMyBookings = async (email) => {
    try {
        const res = await fetch(`http://localhost:3000/api/services/my-booking/${email}`)
        const data = await res.json()
        return data
    } catch (error) {
       
        return []
    }
}

export const getUpdateBookings = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/services/my-booking/delete/${id}`)
        const data = await res.json()
        return data
    } catch (error) {
      
        return []
    }
}
