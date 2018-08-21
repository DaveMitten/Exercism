class Year {
	isLeap(array) {
		for (let i of array) {
			if ( i % 100 !== 0 && i % 400 !== 0 ){
			var aLeap = i % 4 == 0;
			return aLeap;

			}
		}

	}
}



export default Year;
