import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { useState } from "react";

const DropDown = (props) => {

    const [value, setValue] = useState();
    
    const handleChange = (value) => {
        setValue(value);
        props.handleSelect(value);
    }
    return (
        <div></div>
    )
}

export default DropDown;