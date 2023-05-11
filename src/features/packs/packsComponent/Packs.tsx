import React, { useEffect } from "react";
import s from "./Packs.module.css";
import SearchNav from "features/packs/packsComponent/searchNavigate/SearchNav";
import { getPacks } from "features/packs/packs.slice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import Tables from "features/packs/packsComponent/Table/Table";

const Packs = () => {


		const packs = useAppSelector(state => state.packs.packs.cardPacks)
		const min = useAppSelector(state => state.packs.MinMaxValue[0])
		const max = useAppSelector(state => state.packs.MinMaxValue[1])
		const isMyPack = useAppSelector(state => state.packs.isMyPacks)
		const CurrentPackName = useAppSelector(state => state.packs.CurrentPackName)
		const dispatch = useAppDispatch();

		useEffect(() => {

				dispatch(getPacks())
		},[min, max, isMyPack, CurrentPackName])




		return (
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
					<div className={s.PacksContainer}>
							<h1 style={{marginLeft: '17px'}}><span>Packs List</span></h1>
              <div className={s.Container}>
							<SearchNav/>
							<div style={{width: '97%', marginTop: '20px'}}>
               <Tables/>
							</div>
							</div>
					</div>
			</div>
		);
};

export default Packs;