import React from "react";

import PropTypes from "prop-types";

const printCounter = number => {
	let countStr = number.toString();
	let countArr = countStr.split("");

	if (countArr.length < 6) {
		let itemsToAdd = 6 - countArr.length;
		for (let i = 0; i < itemsToAdd; i++) {
			countArr.unshift("0");
		}
	}

	return countArr;
};

//        console.log(countArr);
// }
//     let counter=0;
//       setInterval(()=>{
//    printCounter(counter);
//     counter++;
//   }, 1000);
//

export const Clock = props => {
	const x = printCounter(props.digits);
	return (
		<div className="container text-white bg-dark mx-auto mt-5">
			<div className="row mx-auto">
				<div className="col">
					<i className="fas fa-clock" />
				</div>
				<div className="col">{x[0]}</div>
				<div className="col">{x[1]}</div>
				<div className="col">{x[2]}</div>
				<div className="col">{x[3]}</div>
				<div className="col">{x[4]}</div>
				<div className="col">{x[5]}</div>
			</div>
		</div>
	);
};

Clock.PropTypes = {
	digits: PropTypes.number
};
