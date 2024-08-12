import React from "react";
import {QrCodeGenerator} from "./Components/QrCodeGenerator/QrCodeGenerator.jsx";
import {QrCodeScanner} from "./Components/QrCodeScanner/QrCodeScanner.jsx";
import {Navigation} from "./Components/Navigation/Navigation.jsx";
import {Route, Routes} from "react-router-dom";
import {GenerateHistory} from "./Components/GenerateHistory.jsx";
import {ScanHistory} from "./Components/ScanHistory.jsx";

const Layout = () => {
	return (
		<div>
			<Navigation/>
			<Routes>
				<Route path={`/generate`} element={<QrCodeGenerator/>}/>
				<Route path={`/scan`} element={<QrCodeScanner/>}/>
				<Route path={`/generate-history`} element={<GenerateHistory/>}/>
				<Route path={`/scan-history`} element={<ScanHistory/>}/>
			</Routes>
		</div>
	)
}
export {Layout}