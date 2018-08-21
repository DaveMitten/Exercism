class Year {
	constructor(year){
		this.year = year;
	}
	isLeap() {
			return isLeapYear(this.year)
		}

		isLeapYear(year){
			var aLeap = year % 4 == 0;
			if ( year % 100 !== 0 && year % 400 !== 0  && aLeap){
				
				return aLeap;
		}
		

			}
	}
}



export default Year;





// Actual solution
const isLeapYear = year => {
  console.log('@todo, determine if is leap year:', year);
  return false;
};

// And for unit tests
class Year {
  constructor(year) {
    this.year = year;
  }

  isLeap() {
    return isLeapYear(this.year);
  }
}

export default Year;
