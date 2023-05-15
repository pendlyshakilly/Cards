import React, { ChangeEvent } from "react";
import { Pagination, PaginationItem, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { packsThunks, setCurrentPage, setDisabledMode } from "features/packs/packs.slice";
import { useAppDispatch, useAppSelector } from "common/hooks";

const CustomPagination = () => {
		const dispatch = useAppDispatch();
		const data = useAppSelector<any>(state => state.packs.data);
		const disabledMode = useAppSelector(state => state.packs.disabledMode);

		let count;
		if (data) {
				count = Math.ceil(data.cardPacksTotalCount / data.pageCount);
		}


		const onChangeHandler = (event: ChangeEvent<unknown>, page: number) => {
				dispatch(setCurrentPage(page));
				dispatch(setDisabledMode("pagination1"));
				dispatch(packsThunks.getPacksWithParam());
		};
		return (
			<Stack spacing={2}>
					<Pagination
						onChange={onChangeHandler}
						count={count}

						renderItem={(item) => (
							<PaginationItem
								slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
								{...item}
								disabled={disabledMode.some(el => el === "pagination1")}
							/>
						)}
					/>
			</Stack>
		);
};

export default CustomPagination;