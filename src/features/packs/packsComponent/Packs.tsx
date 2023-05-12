import React from "react";
import s from "./Packs.module.css";
import SearchNav from "features/packs/packsComponent/searchNavigate/SearchNav";
import Tables from "features/packs/packsComponent/Table/Table";
import CustomPagination from "features/packs/packsComponent/Pagination/Pagination";
import CustomSelect from "features/packs/packsComponent/Select/Select";
import { Button } from "@mui/material";

const Packs = () => {
		return (
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
					<div className={s.PacksContainer}>
							<h1 style={{margin: '5px 20px 0px 20px', display: 'flex', justifyContent: 'space-between'}}>
									<span>Packs List</span>
									<Button sx={{borderRadius: '35px'}} variant={'contained'}>Add new pack</Button></h1>
              <div className={s.Container}>
							<SearchNav/>
							<div style={{width: '97%', marginTop: '20px'}}>
               <Tables/>
							</div>

							</div>
							<div style={{margin: '9px 0px 0px 10px'}}>
									<CustomPagination/>
									<span style={{marginLeft: '9px'}}>Show <CustomSelect/> Cards per Page</span>
									</div>
					</div>
			</div>
		);
};

export default Packs;