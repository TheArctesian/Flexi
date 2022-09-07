/*
Maybe monad that I will implement in the future for null checks
*/


var monad = function () {
	class Maybe {
        map(f: any) {
            throw new Error("Not implemented");
        }
        }
    
	class Some extends Maybe {
        constructor(value: any) {
            super();
            this.value = value;
        }
        map(f:any){
          return new Some(f(this.value)); 
        }
    }
	class None extends Maybe {
        map(f:any){
            return new None();
        }
    }
};
