import React from "react";
import styles from "./Records.module.css"
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import enter from '../../../images/entertainment.png'
import car from '../../../images/car.png'
import hospital from '../../../images/hospital.png'
const Records = () =>{
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return(
        <div className={styles.records}>
            <h1>Добавить запись</h1>
            <form method="POST">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>
                           <img src={car} alt="Car" width={30} height={30}/>
                            <span>Машина</span>
                        </MenuItem>
                        <MenuItem value={20}>
                            <img src={enter} alt="Entertainment" width={30} height={30}/>
                            <span>Развлечения</span>
                        </MenuItem>
                        <MenuItem value={30}>
                            <img src={hospital} alt="Hospital" width={30} height={30}/>
                            <span>Больница</span>
                        </MenuItem>
                    </Select>
                </FormControl>
            </form>
        </div>
    )
}

export default Records;