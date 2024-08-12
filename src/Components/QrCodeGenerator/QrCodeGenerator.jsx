import React, {useState} from "react";
import {QRCodeSVG} from "qrcode.react";
import s from './qrCodeGenerator.module.css';
import {GENERATE_DATA} from "../../constans.js";

export const QrCodeGenerator = () => {
	const [value, setValue] = useState('');
	const [result, setResult] = useState('');
	const onClickHandler = () => {
		setResult(value);
		setValue('');
		const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
		localStorage.setItem(
			GENERATE_DATA,
			JSON.stringify([...prevData, value])
		);
	};
	const onChangeHandler = (event) => {
		setValue(event.target.value);
		setResult('');
	};

	return (
		<div className={s.container}>
			<input
				value={value}
				onChange={onChangeHandler}
				type="text"
				className={s.input}
				placeholder='Введите текс.....'
			/>
			<button
				onClick={onClickHandler}
				type="button"
				className={s.button}
			>Сгенерировать QR
			</button>
			{
				result !== '' && (
					<div className={s.qrWrapper}>
						<QRCodeSVG
							value={result}
							size="200"
						/>
					</div>
				)
			}
		</div>
	)
};