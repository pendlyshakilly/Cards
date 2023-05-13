import { ChangeEvent } from "react";
import { useAppDispatch } from "app/hooks";
import { packsThunks, setCurrentPage, setPageCount } from "features/packs/packs.slice";

export default function CustomSelect() {
		const dispatch = useAppDispatch();


		const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
				dispatch(setPageCount(event.currentTarget.value));
				dispatch(setCurrentPage(1));
				dispatch(packsThunks.getPacksWithParam());
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