import { useState, useEffect } from "react";

/* assets */
import viteLogo from "/vite.svg";
import reactLogo from "../../assets/icons/react.svg";
import bunLogo from "../../assets/icons/bun.svg";

/* store */
import { useStoreDispatch, useStoreSelector } from "../../hooks/redux";
import { get__user } from "../../store/redux/reducer/user";

/* styles */
import "./App.scss";

/* types */
import { T_FunctionComponent } from "../../types";

// =======================================

export default function App(): T_FunctionComponent {
	const REDUX_STORE = useStoreSelector((state) => state.user);
	const REDUX = useStoreDispatch();

	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log(REDUX_STORE);
	}, [REDUX_STORE]);

	const handleRedux = (id: string): void => {
		REDUX(get__user(id));
	};

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
				<button onClick={() => handleRedux("admin")}>redux</button>
			</div>
			<p>
				Edit "<code>src/components/app/App.tsx</code>" and save to test HMR
			</p>
			<p>
				You can view the outcome in the browser console to experiment with{" "}
				<strong>redux</strong> or <strong>zustand</strong>
			</p>
			<p className="read-the-docs">
				Click on the Vite, React and Bun logos to learn more
			</p>
		</>
	);
}
