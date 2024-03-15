import { useState, useEffect } from "react";

/* assets */
import viteLogo from "/vite.svg";
import reactLogo from "../../assets/icons/react.svg";
import bunLogo from "../../assets/icons/bun.svg";

/* store - redux */
import { useStoreDispatch, useStoreSelector } from "../../hooks/redux";
import {
	increment__redux,
	decrement__redux,
	reset__redux,
} from "../../store/redux/reducer/global";

/* store - zustand */
import useZustandStore from "../../store/zustand/store";

/* styles */
import "./App.scss";

/* types */
import { T_FunctionComponent } from "../../@types";

// =======================================

export default function App(): T_FunctionComponent {
	// basic state
	const [count, setCount] = useState(0);

	// redux
	const REDUX_STORE = useStoreSelector((state) => state.global);
	const REDUX = useStoreDispatch();

	useEffect(() => {
		console.log("[useEffect] -> redux");
		console.log(REDUX_STORE);
	}, [REDUX_STORE]);

	const handleUserRedux = (id: string): void => {
		const users = REDUX_STORE.user_redux;
		const result = users.find((user) => user.id === id);
		console.log("[handleUserRedux] -> redux");
		console.log(result);
	};

	// zustand
	const {
		count_zustand,
		user_zustand,
		increment__zustand,
		decrement__zustand,
		reset__zustand,
	} = useZustandStore();

	useEffect(() => {
		console.log("[useEffect] -> zustand");
		console.log(useZustandStore.getState());
	}, [count_zustand, user_zustand]);

	const handleUserZustand = (id: string): void => {
		const users = user_zustand;
		const result = users.find((user) => user.id === id);
		console.log("[handleUserZustand] -> zustand");
		console.log(result);
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
			<div className="cards">
				<div className="card">
					<h3>useState</h3>
					<button onClick={() => setCount((count) => count + 1)}>
						count is {count}
					</button>
				</div>
				<div className="card">
					<h3>Redux</h3>
					<p>count is {REDUX_STORE.count_redux}</p>
					<button onClick={() => REDUX(increment__redux())}>increment</button>
					<button onClick={() => REDUX(decrement__redux())}>decrement</button>
					<button onClick={() => REDUX(reset__redux())}>reset</button>
					<button onClick={() => handleUserRedux("user")}>get user</button>
				</div>
				<div className="card">
					<h3>Zustand</h3>
					<p>count is {count_zustand}</p>
					<button onClick={() => increment__zustand()}>increment</button>
					<button onClick={() => decrement__zustand()}>decrement</button>
					<button onClick={() => reset__zustand()}>reset</button>
					<button onClick={() => handleUserZustand("admin")}>get admin</button>
				</div>
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
