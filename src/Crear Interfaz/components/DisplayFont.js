const DisplayFont = ({ selected, onSelect, font}) => {
	return (
		<div className={`select-container ${selected ? `selected` : ''}`} onClick={() => onSelect(font[0])}>
			<h3 style={{fontFamily: `${font[1]}, sans-seriff`, textAlign: 'center', marginTop: 60}}>{font[1]}</h3>
		</div>
	);
};

export default DisplayFont;
