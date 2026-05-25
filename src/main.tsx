import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* libs */
import { Provider } from "react-redux";

/* components */
import Demo from "@/components/demo/Demo.tsx";

/* store - redux */
import store from "@/stores/redux/store.ts";

/* styles */
import "@/styles/tailwind.css";
import "@/styles/index.scss";

// =======================================

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<Provider store={store}>
				<Demo />
			</Provider>
		</StrictMode>,
	);
} else {
	console.error("Element 'root' not found in the document.");
}
