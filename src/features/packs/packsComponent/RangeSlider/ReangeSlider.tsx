import React, { useEffect } from "react";
import { Paper, Slider } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getPacks, setMinMaxValue } from "features/packs/packs.slice";


function valuetext(value: number) {
		return `${value}°C`;
}

const RangeSlider = () => {
		const [value1, setValue1] = React.useState<number[]>([0, 110]);
		const minDistance = 10;

		const dispatch = useAppDispatch();

		const handleChange1 = (
			event: Event,
			newValue: number | number[],
			activeThumb: number,
		) => {
				if (!Array.isArray(newValue)) {
						return;
				}

				if (activeThumb === 0) {
						setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
				} else {
						setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
				}
		};
    const onChangeCommitted = (event: any, newValue: number[] | number) => {
				dispatch(setMinMaxValue(newValue))
				Array.isArray(newValue) && dispatch(getPacks())
		}

		return <div style={{display: 'flex'}}>
		<Paper style={{padding: '8px', marginRight: '20px', height: '19px', borderRadius: '1px', textAlign: 'center'} }>{value1[0]}</Paper>
		<Slider
		getAriaLabel={() => 'Minimum distance'}
		value={value1}
		max={110}
		onChange={handleChange1}
		onChangeCommitted={onChangeCommitted}
		valueLabelDisplay="auto"
		getAriaValueText={valuetext}
		disableSwap
		/>
		<Paper style={{borderRadius: '1px', padding: '8px', marginLeft: '20px', height: '19px'}}>{value1[1]}</Paper>
		</div>
}
export default RangeSlider