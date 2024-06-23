
export const getServiceDetails = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/services/${id}`)
        const data = await res.json()
        return data
    } catch (error) {
        return []
    }
}
