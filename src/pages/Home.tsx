/* types */
import type { T_FunctionComponent } from "@/@types";

// =======================================

export default function Home(): T_FunctionComponent {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center bg-blue-300 font-bold">
			<p className="text-6xl text-white">Hello, world !</p>
		</div>
	);
}
