import TextField from '@mui/material/TextField';
import { useRef, useState } from 'react';



const getFormattedInputValue = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    let res = "";
    if (digits.length > 0) {
        res = `${digits.slice(0, 2)}`;
    }
    if (digits.length >= 2) {
        res += ` ${digits.slice(2, 5)}`;
    }
    if (digits.length >= 5) {
        res += ` ${digits.slice(5, 7)}`;
    }
    if (digits.length >= 7) {
        res += ` ${digits.slice(7, 9)}`;
    }
    return res;
}

const PhoneInput: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, selectionStart, selectionEnd} = e.target;
        e.preventDefault();
        const formattedInputValue: string = getFormattedInputValue(value);
        setInputValue(formattedInputValue);

        setTimeout(()=> {
            if (inputRef.current && selectionStart !== null && selectionEnd !== null){
                const position = formattedInputValue.indexOf(value[selectionStart - 1], selectionEnd -1) +1 || selectionEnd
                if (typeof inputRef.current.setSelectionRange === "function") {
                    inputRef.current.setSelectionRange(position, position);
                }
            }
        }, 0)

    }
    console.log(inputValue);

    return (
        <TextField label="Phone number" variant="filled" required type='tel'
            inputRef={inputRef}
            value={inputValue}
            onChange={handleChange}
            sx={{
                background: ' white', width: '100%', borderRadius: '10px 10px 0 0',
                "& .MuiInputLabel-filled.Mui-focused": {
                    color: "#fdba74",
                    fontWeight: "bold",
                },
                "& .MuiFilledInput-root.Mui-focused.Mui-focused:after": {
                    border: "3px solid  #d97706",
                },
            }}
        />
    )
}

export default PhoneInput;
