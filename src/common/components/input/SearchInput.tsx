import React, { ChangeEvent, useEffect, useState } from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useDebounce from "common/utils/UseDebounce";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { packsThunks, setPackName } from "features/packs/packs.slice";


const SearchInput = () => {
		const StateValue = useAppSelector(state => state.packs.packName);
		const [value, setValue] = useState<string | null>(StateValue);
		const debouncedValue = useDebounce<string | null>(value, 1000);
		const dispatch = useAppDispatch();


		useEffect(() => {
				dispatch(setPackName(debouncedValue));
				dispatch(packsThunks.getPacksWithParam());
		}, [debouncedValue]);


		useEffect(() => {
				setValue(StateValue);
		}, [StateValue]);

		const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
				setValue(e.currentTarget.value);
		};
		return (
			<Paper
				component="form"
				sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%", height: "30px" }}>
					<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
							<SearchIcon />
					</IconButton>
					<InputBase
						value={value}
						onChange={onChangeHandler}
						sx={{ ml: 1, flex: 1 }}
						placeholder="Provide your text"
						inputProps={{ "aria-label": "Provide your text" }}
					/>
			</Paper>
		);
};

export default SearchInput;