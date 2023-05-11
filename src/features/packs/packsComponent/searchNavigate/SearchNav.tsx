import React, { useState } from "react";
import SearchInput from "common/components/input/SearchInput";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import RangeSlider from "features/packs/packsComponent/RangeSlider/ReangeSlider";
import s from "./SearchNav.module.css";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { clearAll, getPacks, setUserId } from "features/packs/packs.slice";


const SearchNav = () => {
		const [variant, setVariant] = useState(false);

		const dispatch = useAppDispatch();
		const packs = useAppSelector<any>(state => state.packs.packs);

		const onClickHandlerMyPacks = () => {
				dispatch(setUserId(true));
				/*dispatch(getPacks());*/
				setVariant(!variant);
		};

		const onClickHandlerAllPacks = () => {
				dispatch(setUserId(false));
				/*dispatch(getPacks());*/
				setVariant(!variant);
		};
		const onClickClear = () => {
				dispatch(clearAll());
				/*dispatch(getPacks());*/
		};
		return (
			<div className={s.SearchNav}>
					<div style={{ width: "35%" }}>
							<h3><span>Search</span></h3>
							<SearchInput />
					</div>
					<div style={{ width: "15%" }}>
							<h3><span>Show packs cards</span></h3>
							<Button className={s.Btn} variant={variant ? "contained" : "outlined"}
											onClick={onClickHandlerMyPacks}>My</Button>
							<Button className={s.Btn} variant={variant ? "outlined" : "contained"}
											onClick={onClickHandlerAllPacks}>All</Button>
					</div>
					<div style={{ width: "35%" }}>
							<div>
									<h3><span>Slider</span></h3>
									<RangeSlider />
							</div>
					</div>
					<div style={{ width: "5%", display: "contents" }}>
							<Paper className={s.Icon}>
							<span onClick={onClickClear}>
									<FilterAltOffIcon />
									</span>
							</Paper>
					</div>
			</div>
		);
};

export default SearchNav;




