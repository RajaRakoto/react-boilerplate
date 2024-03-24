import React from "react";
import ReactDOM from "react-dom/client";

/* libs */
import { Provider } from "react-redux";

/* components */
import Demo from "@/components/demo/Demo.tsx";

/* store - redux */
import store from "@/stores/redux/store.ts";

/* styles */
import "@/styles/tailwind.scss";
import "@/styles/index.scss";

// =======================================

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<Demo />
		</Provider>
	</React.StrictMode>,
);
