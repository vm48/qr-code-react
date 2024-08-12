import React from "react";
import {SCAN_DATA} from "../constans.js";
import {QRCodeSVG} from "qrcode.react";

export const ScanHistory = () => {
	const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
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