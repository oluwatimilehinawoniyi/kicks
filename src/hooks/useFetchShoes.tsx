import axios from "axios";
import { useEffect, useState } from "react"

interface Shoe {
    id: number;
    name: string;
    price: number;
    size: number[];
    colors: string[];
    category: string[];
    gender: string;
    tag: string;
    imgSrc: string
}

export default function useFetchShoes() {

    const [shoes, setShoes] = useState<Shoe[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchShoes = async () => {
            try {
                setLoading(true)
                const response = await axios.get<Shoe[]>('http://localhost:3001/shoes')
                setShoes(response.data)
                setError(null)
            } catch (err: unknown) {
                if (axios.isAxiosError(err)) {
                    if (err.response) {
                        setError(`Error ${err.response.status}: ${err.response.data}`);
                    } else if (err.request) {
                        setError("No response received from the server.");
                    } else {
                        setError(err.message || "An unknown error occurred.");
                    }
                } else if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unexpected error occurred.");
                }
            } finally {
                setLoading(false)
            }
        }

        fetchShoes()
    }, [])
    return { shoes, loading, error };
}
