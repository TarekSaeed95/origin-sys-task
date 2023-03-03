import axios from "axios"
import { useEffect, useState } from "react"
const fetchUsersHook = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [usersData, setUsersData] = useState([]);
    const role = ['admin', 'employee']
    const active = [true, false]
    useEffect(() => {
        const usersDataFetching = async () => {
            try {
                const res = await axios.get(
                    `https://rickandmortyapi.com/api/character`
                );
                let data = await res.data.results;
                setUsersData([]);
                data.forEach((user) => {
                    setUsersData((prev) => [
                        ...prev,
                        {
                            id: user.id,
                            name: user.name,
                            gender: user.gender,
                            image: user.image,
                            address: user.location.name,
                            role: role[Math.floor(Math.random() * 2)],
                            alive: user.status == 'Alive' ? true : false
                        },
                    ]);
                });
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        usersDataFetching();

    }, []);
    return { usersData, loading, error }
}

export default fetchUsersHook