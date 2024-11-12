import styles from './input.module.css'

interface InputFormProps {
    // value: string;
    type: string;
    placeholder: string;
    // onChange: (value: string) => void;
}

export default function InputForm({ type, placeholder }: InputFormProps) {
    return (
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
        />
    )
}
