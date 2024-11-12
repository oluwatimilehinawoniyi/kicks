import { useState } from 'react'
import styles from './colourChoice.module.css'

interface ColorChoiceProps {
    colours: string[]
}

export default function ColorChoice({ colours }: ColorChoiceProps) {
    const [choiceList, setChoiceList] = useState<number[]>([])

    function handleSelect(index: number) {
        if (choiceList.includes(index)) {
            setChoiceList(choiceList.filter(item => item !== index))
        } else {
            setChoiceList([...choiceList, index])
        }
    }
    return (
        <div className={styles.colourChoice}>
            {
                colours.map((colour, index) => (
                    <div key={index}
                        className={styles.colourWrapper}
                        style={{
                            border: "3px solid",
                            borderColor: choiceList.includes(index) ? colour : "transparent",

                        }}
                        onClick={() => handleSelect(index)}>

                        <div
                            className={styles.colour}
                            style={{ backgroundColor: colour }}
                        ></div>

                    </div>
                ))
            }
        </div >
    )
}