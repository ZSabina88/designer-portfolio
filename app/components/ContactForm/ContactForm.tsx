import TextField from '@mui/material/TextField';
import PhoneInput from './PhoneInput';


const ContactForm: React.FC = () => {
    return (
        <form className='flex flex-col items-center mt-2 gap-6 w-[50%] text-sm text-black'>
            <TextField label="Name" variant="filled" required type='text'
                sx={{
                    background: ' white', width: '100%', borderRadius: '10px 10px 0 0',
                    "& .MuiInputLabel-filled.Mui-focused": {
                        color: "#fdba74",
                        fontWeight: "bold",
                    },
                    "& .MuiFilledInput-root.Mui-focused:after": {
                        border: "3px solid  #d97706",
                    },
                }}
            />
            <TextField label="Email" variant="filled" required type='email'
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
            <PhoneInput />
            <TextField
                variant="filled"
                sx={{
                    background: ' white', width: '100%', borderRadius: '10px 10px 0 0',
                    "& .MuiFilledInput-root.Mui-focused:after": {
                        border: "3px solid  #d97706",
                    },
                }}
                placeholder='Message'
                required
                multiline
                rows={4}
                maxRows={6}
                inputProps={{ maxLength: "150" }}
            />
            <button className='w-[100%] h-12 rounded-t-lg bg-orange-300 text-xl text-white'>SEND</button>
        </form>
    )
}

export default ContactForm
