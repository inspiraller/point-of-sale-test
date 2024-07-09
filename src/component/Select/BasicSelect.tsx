import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export type SelectOptions = Array<{ label: string; value: string, key: string }>;
export interface Props {
  id: string;
  label: string;
  selectOptions: SelectOptions;
  handleSelect: (event: SelectChangeEvent<any>, child: React.ReactNode) => void;
  value: string;
}

export const styleProps = {
  minWidth: 120,
};

export const BasicSelect = ({
  id,
  label,
  selectOptions,
  handleSelect,
  value,
}: Props) => {
  return  <Box sx={{ minWidth: styleProps.minWidth }}>
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        labelId={id}
        value={value}
        label={label}
        onChange={handleSelect}
      >
        {selectOptions.map((option) => (
          <MenuItem key={option.key} value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  </Box>
}
