import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import '../style/style.css';


export const Header=()=>{
    const [level, setLevel] = React.useState('');
    const navigate = useNavigate();
    const handleChange = (event) => {
        const selectedLevel = event.target.value;
        setLevel(selectedLevel);
      
        if (selectedLevel === 1) {
          navigate('/Level1');
        } else if (selectedLevel === 2) {
          navigate('/Level2');
        } else if (selectedLevel === 3) {
          navigate('/Level3');
        } else if (selectedLevel === 4) {
          navigate('/Level4');
        } else if (selectedLevel === 5) {
          navigate('/Level5');
        }
      };

    return(
        <header className="header">
            <nav className="nav">
              <div className='Header_box'>
                <ul className="Header_title">One arm push up training
                </ul>
                </div>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Actual MAXIMUM</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={level}
                        label="Actual maximum"
                        onChange={handleChange}
                        >
                        <MenuItem value={1}>LEVEL 1: Less than 12x Pullups</MenuItem>
                        <MenuItem value={2}>LEVEL 2: 12 or more pull ups</MenuItem>
                        <MenuItem value={3}>LEVEL 3: 8xPull ups+20% weight</MenuItem>
                        <MenuItem value={4}>LEVEL 4: 6xPull ups+40% weight</MenuItem>
                        <MenuItem value={5}>LEVEL 5: 3xone arm assisted pull ups-20% weight</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
            </nav>
        </header>
    )
}