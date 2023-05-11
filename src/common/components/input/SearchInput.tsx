import React, { ChangeEvent, useEffect, useState } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useDebounce from "common/utils/UseDebounce";
import { useAppDispatch } from "app/hooks";
import { getPacks, setPackName } from "features/packs/packs.slice";


const SearchInput = () => {
		const [value, setValue] = useState<string>("");
		const debouncedValue = useDebounce<string>(value, 1000);
		const dispatch = useAppDispatch();

		useEffect(() => {
		 if (debouncedValue === ""){
				 dispatch(setPackName(null))
				 return
		 }else{
				 dispatch(setPackName(debouncedValue))
				 dispatch(getPacks())
		 }
		}, [debouncedValue]);


		const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
				setValue(e.currentTarget.value)
		}
		return (
			<Paper
				component="form"
				sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%", height: "30px" }}>
					<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
							<SearchIcon />
					</IconButton>
					<InputBase
						onChange={onChangeHandler}
						sx={{ ml: 1, flex: 1 }}
						placeholder="Provide your text"
						inputProps={{ "aria-label": "Provide your text" }}
					/>
			</Paper>
		);
};

export default SearchInput;