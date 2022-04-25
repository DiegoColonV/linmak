import Downshift from 'downshift';

const Autocomplete = ({ arr, handleAutocomplete }) => {
	return (
		<div style={{}}>
			<Downshift onChange={(selection) => handleAutocomplete(selection ? selection : null)} itemToString={(item) => (item ? item.text : '')}>
				{({ getInputProps, getItemProps, getMenuProps, getLabelProps, getToggleButtonProps, inputValue, highlightedIndex, selectedItem, isOpen }) => (
					// style={comboboxStyles}
					<div>
						<div className='row'>
							<div className='col-10 p-0'>
								<input className='form-control form-control-lg input-autocomplete' {...getInputProps()} />
							</div>
							<div className='col -2 p-0'>
								<button className='btn btn-autocomplete' {...getToggleButtonProps()} aria-label={'toggle menu'}>
									<i className='bx bx-chevron-down'></i>
								</button>
							</div>
						</div>

						{/* style={menuStyles} */}
						<ul className='list-group w-100' {...getMenuProps()}>
							{isOpen &&
								arr
									.filter((item) => !inputValue || item.text.toLowerCase().includes(inputValue.toLowerCase()))
									.map((item, index) => (
										<li
											className='list-group-item'
											{...getItemProps({
												key: `${item.text}${index}`,
												item,
												index,
												style: {
													backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
													fontWeight: selectedItem === item ? 'bold' : 'normal',
												},
											})}
										>
											{item.text}
										</li>
									))}
						</ul>
					</div>
				)}
			</Downshift>
		</div>
	);
};

export default Autocomplete;
