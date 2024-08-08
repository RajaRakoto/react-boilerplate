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

const rootElement = document.getElementById("root");

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<Provider store={store}>
				<Demo />
			</Provider>
		</React.StrictMode>,
	);
} else {
	console.error("Element 'root' not found in the document.");
}
