import React from "react";
import ReactDOM from "react-dom/client";

/* libs */
import { Provider } from "react-redux";

/* components */
import App from "./components/app/App.tsx";

/* store - redux */
import store from "./stores/redux/store.ts";

/* styles */
import "./styles/index.scss";
// import "./styles/tailwind.scss";

// =======================================

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
