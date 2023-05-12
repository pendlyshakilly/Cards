import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect, useState } from "react";
import s from "./Table.module.scss";
import { packsThunks, setSortMode } from "features/packs/packs.slice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.head}`]: {
				backgroundColor: "#a4a4a4",
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
		"&:last-child td, &:last-child th": {
				border: 0
		}
}));


export default function Tables() {
		const dispatch = useAppDispatch()
		const cards = useAppSelector<any>(state => state.packs.data);
		const [filterMode, setFilterMode] = useState({name: true, cards: true, lastUpdate: true});
		let style = {cursor: "pointer"};

		useEffect(() => {
         if (!filterMode.name){
						 dispatch(setSortMode(`sortPacks=0name`))
						 dispatch(packsThunks.getPacksWithParam())
				 }
				 else {
						 dispatch(setSortMode(null))
						 dispatch(packsThunks.getPacksWithParam())
				 }
		}, [filterMode.name])
		useEffect(() => {
         if (!filterMode.cards){
						 dispatch(setSortMode(`sortPacks=0cardsCount`))
						 dispatch(packsThunks.getPacksWithParam())
				 }
				 else {
						 dispatch(setSortMode(null))
						 dispatch(packsThunks.getPacksWithParam())
				 }
		}, [filterMode.cards])
		useEffect(() => {
         if (!filterMode.lastUpdate){
						 dispatch(setSortMode(`sortPacks=0updated`))
						 dispatch(packsThunks.getPacksWithParam())
				 }
				 else {
						 dispatch(setSortMode(null))
						 dispatch(packsThunks.getPacksWithParam())
				 }
		}, [filterMode.lastUpdate])

		return (
			<TableContainer component={Paper}>
					<Table sx={{ minWidth: 700 }} aria-label="customized table">
							<TableHead>
									<TableRow>
											<StyledTableCell><span
												className={filterMode.name ? s.styledTableCellDown : s.styledTableCellUp}
												onClick={() => setFilterMode({...filterMode, name: !filterMode.name})}
												style={style}>Name</span></StyledTableCell>
											<StyledTableCell align="right"><span
												className={filterMode.cards ? s.styledTableCellDown : s.styledTableCellUp} style={style}
												onClick={() => setFilterMode({...filterMode, cards: !filterMode.cards})}>Cards</span></StyledTableCell>
											<StyledTableCell align="right"><span
												className={filterMode.lastUpdate ? s.styledTableCellDown : s.styledTableCellUp}
												onClick={() => setFilterMode({...filterMode, lastUpdate: !filterMode.lastUpdate})}
												style={style}>Last Update</span></StyledTableCell>
											<StyledTableCell align="right"><span
												style={style}>Created by</span></StyledTableCell>
											<StyledTableCell align="right"><span
												style={style}>Actions</span></StyledTableCell>
									</TableRow>
							</TableHead>
							<TableBody>
									{cards ? cards.cardPacks.map((el: any) => {
											return <StyledTableRow key={el.userId} sx={{ width: "100%" }}>
													<StyledTableCell component="th" scope="row">{el.name}</StyledTableCell>
													<StyledTableCell align="right">{el.cardsCount}</StyledTableCell>
													<StyledTableCell align="right">{el.updated}</StyledTableCell>
													<StyledTableCell align="right">{el.user_name}</StyledTableCell>
													<StyledTableCell align="right">{"row.actions"}</StyledTableCell>
											</StyledTableRow>;
									}) : <StyledTableCell component="th" scope="row">Loading...</StyledTableCell>}
							</TableBody>
					</Table>
			</TableContainer>
		);
}