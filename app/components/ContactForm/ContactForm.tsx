'use client';
import TextField from '@mui/material/TextField';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
    return (
        <motion.form className='flex flex-col items-center mt-6 gap-6 w-[50%] text-sm text-black'
        initial= {{ opacity: 0, y: 20}}
        animate= {{opacity: 1, y: 0}}
        transition={{ duration: 1, delay: 0.5 }}
        >
            <TextField label="Name" variant="filled" required
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
            <TextField label="Email" variant="filled" required
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
        </motion.form>
    )
}

export default ContactForm
