import { useState } from "react";

/* assets */
import reactLogo from "../../assets/icons/react.svg";
import bunLogo from "../../assets/icons/bun.svg";
import viteLogo from "/vite.svg";

/* styles */
import "./App.scss";

/* types */
import { T_FunctionComponent } from "../../types";

// =======================================

export default function App(): T_FunctionComponent {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
				<a href="https://bun.sh/" target="_blank">
					<img src={bunLogo} className="logo bun" alt="Bun logo" />
				</a>
			</div>
			<h1>Vite + React + Bun</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/components/app/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}
