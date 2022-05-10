import { useState } from 'react';

const DisplayInt = ({ selected, onSelect, int, onExpand }) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<div className='position-relative'>
			<div
				className={`select-container ${selected ? `selected` : ''}`}
				onClick={() => onSelect(int)}
				onMouseEnter={() => setIsHover(!isHover)}
				onMouseLeave={() => setIsHover(!isHover)}
			>
				<img src={`/img/previews/${int[1].toLowerCase()}.png`} />
			</div>
			<div className='expand-int' onClick={() => onExpand(int[1])}>
				<i className='bx bx-expand'></i>
			</div>
		</div>
	);
};

export default DisplayInt;
