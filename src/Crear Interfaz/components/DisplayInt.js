import { useState } from 'react';

const DisplayInt = ({ selected, onSelect, int, onExpand }) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<div
			className={`select-container ${selected ? `selected` : ''}`}
			onClick={() => onSelect(int[0])}
			onMouseEnter={() => setIsHover(!isHover)}
			onMouseLeave={() => setIsHover(!isHover)}
		>
			<img src={`/img/previews/${int[1].toLowerCase()}.png`} />
			{isHover && (
				<div className='expand' onClick={()=>onExpand(int[1])}>
					<i className='bx bx-expand'></i>
				</div>
			)}
		</div>
	);
};

export default DisplayInt;
