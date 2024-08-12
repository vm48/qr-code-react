import React from "react";
import {GENERATE_DATA} from "../constans.js";
import {QRCodeSVG} from "qrcode.react";

export const GenerateHistory = () => {
	const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
	console.log(data);
	return (
		<div>
			{
				data.map((text) => (
						<p key={text}>
							{text}
							<QRCodeSVG
								value={text}
								size="200"
							/>
						</p>
					)
				)
			}
		</div>
	)
}