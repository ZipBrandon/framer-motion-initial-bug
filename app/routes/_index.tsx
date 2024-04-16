import type { MetaFunction } from "@remix-run/node";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	const [values, setValues] = useState<string[]>([]);

	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 5 }}
			>
				Testing
			</motion.div>
			<div>
				<motion.div
					layout
					initial={{ opacity: 0 }}
					transition={{ duration: 3 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className={`bg-blue-500`}
				>
					Testing!
				</motion.div>
				<div>
					<AnimatePresence initial={false}>
						{values.map((m) => (
							<motion.div
								layout
								initial={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								key={m}
							>
								{m}
							</motion.div>
						))}
					</AnimatePresence>

					<button
						type={"button"}
						onClick={(e) => {
							setValues((vals) => {
								return [...vals, Math.random()];
							});
						}}
					>
						click
					</button>
				</div>
			</div>
		</div>
	);
}
