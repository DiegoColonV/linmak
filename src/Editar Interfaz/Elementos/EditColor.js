import { useState } from 'react';
import { Form } from 'react-bootstrap';
import BottomButtons from '../components/BottomButtons';

const dummyColores = {
	first: 'tomato',
	second: 'black',
	third: '#F7E2E2',
	fourth: 'lightgrey',
};

const EditColor = () => {
	const [text, setText] = useState('');
	const baseObject = { ...dummyColores };

	const handleInput = (event) => {
		setText(event.target.value);
	};

	const [objOrder, setObjOrder] = useState(dummyColores);
	const [showPickerArr, setShowPickerArr] = useState([false, false, false, false]);

	const handleSelectOrder = (place, hex, picker) => {
		const temp = { ...objOrder };
		temp[place] = hex;
		setObjOrder(temp);
		handleShowPicker(picker);
	};

	const handleShowPicker = (pos) => {
		let temp = [...showPickerArr];
		temp[pos] = !temp[pos];

		setShowPickerArr(temp);
	};

	const [switchStatus, setSwitchStatus] = useState(true);

	const handleCheck = () => {
		setSwitchStatus(!switchStatus);
	};

	return (
		<>
			<h1 className='section-title-edit mt-5'>COLORES</h1>
			<div className='my-3 d-flex justify-content-center color-switch'>
				<h5>Cambiar orden</h5>
				<Form.Check type='switch' inline className='switch-component mx-4' onClick={handleCheck} />
				<h5>Cambiar colores</h5>
			</div>

			<div className='row d-flex justify-content-center mt-3'>
				{switchStatus ? (
					<div className='col-10 mt-3'>
						<div className='row d-flex justify-content-center align-items-center mb-2'>
							<div className='col-5 row d-flex justify-content-center align-items-center'>
								<div className='col-7 ps-4 edit-color-indicator'>Color primario:</div>
								<div className='col-5 d-flex justify-content-center'>
									<div className='row picker-trigger-container '>
										<button onClick={() => handleShowPicker(0)} style={{ background: objOrder.first, border: '1px solid lightgray' }} className='btn'></button>
									</div>
								</div>
							</div>
							<div className='col-3'>
								{showPickerArr[0] && (
									<div className='row d-flex justify-content-around picker-container'>
										<ColorPicker baseObject={baseObject} handleSelectOrder={handleSelectOrder} obj={objOrder} place={'first'} picker={0} />
									</div>
								)}
							</div>
						</div>
						<div className='row d-flex justify-content-center align-items-center mb-2'>
							<div className='col-5 row d-flex justify-content-center align-items-center'>
								<div className='col-7 ps-4 edit-color-indicator'>Color secundario:</div>
								<div className='col-5 d-flex justify-content-center'>
									<div className='row picker-trigger-container '>
										<button onClick={() => handleShowPicker(1)} style={{ background: objOrder.second, border: '1px solid lightgray' }} className='btn'></button>
									</div>
								</div>
							</div>
							<div className='col-3'>
								{showPickerArr[1] && (
									<div className='row d-flex justify-content-around picker-container'>
										<ColorPicker baseObject={baseObject} handleSelectOrder={handleSelectOrder} obj={objOrder} place={'second'} picker={1} />
									</div>
								)}
							</div>
						</div>
						<div className='row d-flex justify-content-center align-items-center mb-2'>
							<div className='col-5 row d-flex justify-content-center align-items-center'>
								<div className='col-7 ps-4 edit-color-indicator'>Color terciario:</div>
								<div className='col-5 d-flex justify-content-center'>
									<div className='row picker-trigger-container '>
										<button onClick={() => handleShowPicker(2)} style={{ background: objOrder.third, border: '1px solid lightgray' }} className='btn'></button>
									</div>
								</div>
							</div>
							<div className='col-3'>
								{showPickerArr[2] && (
									<div className='row d-flex justify-content-around picker-container'>
										<ColorPicker baseObject={baseObject} handleSelectOrder={handleSelectOrder} obj={objOrder} place={'third'} picker={2} />
									</div>
								)}
							</div>
						</div>
						<div className='row d-flex justify-content-center align-items-center'>
							<div className='col-5 row d-flex justify-content-center align-items-center'>
								<div className='col-7 ps-4 edit-color-indicator'>Color cuaternario:</div>
								<div className='col-5 d-flex justify-content-center'>
									<div className='row picker-trigger-container '>
										<button onClick={() => handleShowPicker(3)} style={{ background: objOrder.fourth, border: '1px solid lightgray' }} className='btn'></button>
									</div>
								</div>
							</div>
							<div className='col-3'>
								{showPickerArr[3] && (
									<div className='row d-flex justify-content-around picker-container'>
										<ColorPicker baseObject={baseObject} handleSelectOrder={handleSelectOrder} obj={objOrder} place={'fourth'} picker={3} />
									</div>
								)}
							</div>
						</div>
					</div>
				) : (
					<div className='col-8 mt-5'>
						<input
							type='text'
							className='form-control form-control-lg'
							value={text}
							placeholder='Describe los colores que quieres que tenga tu página'
							onChange={handleInput}
						></input>
					</div>
				)}
			</div>
			<BottomButtons cat_change='color' id_change={switchStatus ? 'elem-color-order' : 'elem-color-text'} text_change={switchStatus ? JSON.stringify(objOrder) : text.trim()} />
		</>
	);
};

const ColorPicker = ({ handleSelectOrder, place, baseObject, picker }) => {
	return (
		<>
			<button className='btn' style={{ background: baseObject.first }} onClick={() => handleSelectOrder(place, baseObject.first, picker)} />
			<button className='btn' style={{ background: baseObject.second }} onClick={() => handleSelectOrder(place, baseObject.second, picker)} />
			<button className='btn' style={{ background: baseObject.third }} onClick={() => handleSelectOrder(place, baseObject.third, picker)} />
			<button className='btn' style={{ background: baseObject.fourth }} onClick={() => handleSelectOrder(place, baseObject.fourth, picker)} />
		</>
	);
};

export default EditColor;
