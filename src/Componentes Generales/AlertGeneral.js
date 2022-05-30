import { useState } from 'react';

const AlertGeneral = ({ variant, text, top, bottom, right, left, time, show }) => {
	return (
		<>
			{show && (
				<div className='row'>
					<div
						className={`alert alert-${variant ? variant : 'success'} alert-general position-absolute`}
						role='alert'
						style={{ top: top ? top : '50%', left: left ? left : '50%', right: right ? right : '50%', bottom: bottom ? bottom : '50%' }}
					>
						<i className={`bx bx-${variant && variant === 'danger' ? 'x' : 'check'}`}></i> {text}
					</div>
				</div>
			)}
		</>
	);
};

export default AlertGeneral;
