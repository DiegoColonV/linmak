const DisplayColor = ({ selected, onSelect, palette, night }) => {
	return (
		<div className={`select-container ${selected ? `selected` : ''}`} style={night ? { background: '#282c34' } : { background: '#f5f5f5' }} onClick={() => onSelect(palette[0])}>
			<div className='segment' style={{ background: palette[1] }} />
			<div className='segment' style={{ background: palette[2] }} />
			<div className='segment' style={{ background: palette[3] }} />
			<div className='segment' style={{ background: palette[4] }} />
		</div>
	);
};

export default DisplayColor;
