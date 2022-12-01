import React, {useState} from "react";
import styles from "./Records.module.css"
import {
    FormControl,
    FormHelperText,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    StyledEngineProvider
} from "@mui/material";
import enter from '../../../images/entertainment.png'
import car from '../../../images/car.png'
import hospital from '../../../images/hospital.png'
const Records = () =>{
    const [age, setAge] = React.useState('');
    const [type,setType] = useState('')
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleOtherChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleTwoChange = (event) => {
        setType(event.target.value);
    };
    return(
        <div>
            <h1>Добавить запись</h1>
            <div style={{display:'flex'}}>
                <form method="POST" className={styles.records}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <h2>Снятие</h2>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Область</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Область"
                                onChange={handleChange}
                            >
                                <MenuItem value='Car'>
                                    <img src={car} alt="Car" width={30} height={30}/>
                                    <span>Машина</span>
                                </MenuItem>
                                <MenuItem value='Entertainment'>
                                    <img src={enter} alt="Entertainment" width={30} height={30}/>
                                    <span>Развлечения</span>
                                </MenuItem>
                                <MenuItem value='Hospital'>
                                    <img src={hospital} alt="Hospital" width={30} height={30}/>
                                    <span>Больница</span>
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                value={values.weight}
                                onChange={handleOtherChange('weight')}
                                endAdornment={<InputAdornment position="end">руб.</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                label="Тип"
                                onChange={handleTwoChange}
                                style={{width:'250px'}}
                            >
                                <MenuItem value='Replenishment'>
                                    <span>Пополнение</span>
                                </MenuItem>
                                <MenuItem value='Withdrawal'>
                                    <span>Снятие</span>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </form>
                <form method="POST" className={styles.records}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <h2>Пополнение</h2>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                value={values.weight}
                                onChange={handleOtherChange('weight')}
                                endAdornment={<InputAdornment position="end">руб.</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Тип</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                label="Тип"
                                onChange={handleTwoChange}
                                style={{width:'250px'}}
                            >
                                <MenuItem value='Replenishment'>
                                    <span>Пополнение</span>
                                </MenuItem>
                                <MenuItem value='Withdrawal'>
                                    <span>Снятие</span>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Records;