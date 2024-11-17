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

    useEffect(() => {
        axios.get('http://localhost:3001/shoes').then(res =>
            setShoes(res.data)
        )

    }, [])
    return { shoes }
}
