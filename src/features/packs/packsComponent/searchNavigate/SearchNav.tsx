import React, { useState } from "react";
import SearchInput from "common/components/input/SearchInput";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import RangeSlider from "features/packs/packsComponent/RangeSlider/ReangeSlider";
import s from "./SearchNav.module.css";
import { packsThunks, setDisabledMode, setMinMaxValue, setPackName, setUserId } from "features/packs/packs.slice";
import { useAppDispatch, useAppSelector } from "common/hooks";


const SearchNav = () => {
		const [variant, setVariant] = useState<boolean>(false);
		const userId = useAppSelector(state => state.auth.profile && state.auth.profile._id);
		const disabledMode = useAppSelector(state => state.packs.disabledMode);
		const dispatch = useAppDispatch();

		const onClickHandlerMyPacks = () => {
				setVariant(true);
				dispatch(setUserId(userId));
				dispatch(packsThunks.getPacksWithParam());
		};

		const onClickHandlerAllPacks = () => {
				setVariant(false);
				dispatch(setUserId(null));
				dispatch(packsThunks.getPacksWithParam());

		};
		const onClickClear = () => {
				dispatch(setMinMaxValue([0, 110]));
				dispatch(setPackName(""));
				dispatch(setUserId(null));
				dispatch(setDisabledMode("icon1"));
				dispatch(packsThunks.getDefaultPacks());
		};
		return (
			<div className={s.SearchNav}>
					<div style={{ width: "35%" }}>
							<h3><span>Search</span></h3>
							<SearchInput />
					</div>
					<div style={{ width: "15%" }}>
							<h3><span>Show packs cards</span></h3>
							<Button
								disabled={variant}
								className={s.Btn} variant={variant ? "outlined" : "contained"}
								onClick={onClickHandlerMyPacks}>My</Button>
							<Button
								disabled={!variant}
								className={s.Btn} variant={variant ? "contained" : "outlined"}
								onClick={onClickHandlerAllPacks}>All</Button>
					</div>
					<div style={{ width: "35%" }}>
							<div>
									<h3><span>Slider</span></h3>
									<RangeSlider />
							</div>
					</div>
					<div style={{ width: "5%", display: "contents" }}>
							<Paper className={s.Icon} sx={{ cursor: "pointer" }} >
							<span onClick={onClickClear} style={
									disabledMode.some(el => el === "icon1")
										? {pointerEvents: 'none', color: '#8a8a8a', opacity: '0.3'} : {}}>
									<FilterAltOffIcon aria-disabled={true} />
									</span>
							</Paper>
					</div>
			</div>
		);
};

export default SearchNav;




