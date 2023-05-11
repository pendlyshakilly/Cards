import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppSelector } from "app/hooks";

type PropsType = {
		cards: any
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.head}`]: {
				backgroundColor: "#ababab",
				color: theme.palette.common.black
		},
		[`&.${tableCellClasses.body}`]: {
				fontSize: 14
		}
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
		"&:nth-of-type(odd)": {
				backgroundColor: theme.palette.action.hover
		},
		// hide last border
		"&:last-child td, &:last-child th": {
				border: 0
		}
}));

export default function Tables() {
		const cards = useAppSelector(state => state.packs.packs.cardPacks)
		return (
			<TableContainer component={Paper}>
					<Table aria-label="customized table">
							<TableHead>
									<TableRow>
											<StyledTableCell>Name</StyledTableCell>
											<StyledTableCell align="right"><span>Cards</span></StyledTableCell>
											<StyledTableCell align="right"><span>Last&nbsp;Update</span></StyledTableCell>
											<StyledTableCell align="right"><span>Created&nbsp;by</span></StyledTableCell>
											<StyledTableCell align="right"><span>Actions</span></StyledTableCell>
									</TableRow>
							</TableHead>
							<TableBody>
									{cards.map((el: any) => {
											return <StyledTableRow key={el.user_id}>
													<StyledTableCell component="th" scope="row">{el.name}</StyledTableCell>
													<StyledTableCell align="right">{el.cardsCount}</StyledTableCell>
													<StyledTableCell align="right">{el.updated}</StyledTableCell>
													<StyledTableCell align="right">{el.user_name}</StyledTableCell>
													<StyledTableCell align="right">{"row.actions"}</StyledTableCell>
											</StyledTableRow>;
									})}
							</TableBody>
					</Table>
			</TableContainer>
		);
}