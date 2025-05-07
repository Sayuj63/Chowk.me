import React, { useEffect, useRef } from "react";
import { TabKey } from "../App";

function Navbar({ tab, setTab, left = 0, sliderWidth = 0, setX, setW }) {
	const tabs = [
		{ key: TabKey.Home, label: "Home" },
		{ key: TabKey.Work, label: "Projects" },
		{ key: TabKey.Blog, label: "Writing" },
		{ key: TabKey.Contact, label: "Contact" },
	];

	const tabRefs = useRef({
		[TabKey.Home]: null,
		[TabKey.Work]: null,
		[TabKey.Blog]: null,
		[TabKey.Contact]: null,
	});

	useEffect(() => {
		const calculateSliderPosition = () => {
			const currentTabRef = tabRefs.current[tab];
			if (currentTabRef) {
				const rect = currentTabRef.getBoundingClientRect();
				setX(rect.left);
				setW(rect.width);
			}
		};
		calculateSliderPosition();
		window.addEventListener("resize", calculateSliderPosition);
		return () => {
			window.removeEventListener("resize", calculateSliderPosition);
		};
	}, [tab]);

	return (
		<div className="flex flex-row gap-4 items-center py-2 px-2 bg-transparent">
			{tabs.map(({ key, label }) => (
				<div
					key={key}
					ref={(el) => {
						tabRefs.current[key] = el;
					}}
					className={`tab flex items-center h-8 px-4 cursor-pointer justify-center font-medium text-base text-[#111827] ${tab === key ? 'border-b-2 border-black' : ''}`}
					onClick={() => setTab(key)}
				>
					{label}
				</div>
			))}
		</div>
	);
}

export default Navbar;
