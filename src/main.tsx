import React from "react";
import ReactDOM from "react-dom/client";

/* components */
import App from "./components/app/App.tsx";

/* styles */
import "./styles/index.scss";
// import "./styles/tailwind.scss";

// =======================================

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
