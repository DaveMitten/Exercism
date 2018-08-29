// attempt 1
// class Year {
// 	constructor(year){
// 		this.year = year;
// 	}
// 	isLeap() {
// 			return isLeapYear(this.year)
// 		}

// 		isLeapYear(year){
// 			var aLeap = year % 4 == 0;
// 			if ( year % 100 !== 0 && year % 400 !== 0  && aLeap){

// 				return aLeap;
// 		}


// 			}
// 	}
// }



// export default Year;



//attempt 2

// class Year {
// 	constructor(year){
// 		this.year = year;
// 	}
// 	isLeap() {
// 			return isLeapYear(this.year)
// 		}

// 		isLeapYear(year){
// 				if(year % 4 === 0) return true;
// 			} elseif(year )
// 	}
// }




// export default Year;



//help from mentor

// // Actual solution
// const isLeapYear = year => {
//   console.log('@todo, determine if is leap year:', year);
//   return false;
// };

// // And for unit tests
// class Year {
//   constructor(year) {
//     this.year = year;
//   }

//   isLeap() {
//     return isLeapYear(this.year);
//   }
// }

// export default Year;

// should work!
class Year {
	constructor(year) {
		this.year = year;
	}

	isLeapYear(year) {
		var a = (year % 100 == 0) ? (year % 400 == 0) : (year % 4 == 0);
		return a;

	}
	isLeap() {
		return isLeapYear(this.year);
	}


}



export default Year;