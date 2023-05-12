import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "app/hooks";
import { packsThunks, setPageCount } from "features/packs/packs.slice";

export default function CustomSelect() {
    const dispatch = useAppDispatch()


		const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
     dispatch(setPageCount(event.currentTarget.value))
				dispatch(packsThunks.getPacksWithParam())
		};

		return (
					<select onChange={handleChange}>
							<option>4</option>
							<option>6</option>
							<option>8</option>
							<option>10</option>
					</select>
		);
}