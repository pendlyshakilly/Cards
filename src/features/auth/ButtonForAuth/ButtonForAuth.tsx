import React, { FC } from "react";
import Button from "@mui/material/Button";

type ButtonForAuthType = {
		title: string
		callback: () => void
}

export const ButtonForAuth: FC<ButtonForAuthType> = ({ title,callback }) => {
		const styleBtn = {
				m: 1,
				width: "347px",
				borderRadius: "30px",
				backgroundColor: "#366EFF",
				fontWeight: "500",
				fontSize: "16px"
		};

		return (
			<div>
					<Button onClick={callback} sx={styleBtn} variant="contained">{title}</Button>
			</div>
		);
};

