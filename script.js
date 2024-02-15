function firstWord(s) {
  // your code here
	if(s.length===0){
		return '';
	}
	else{
		for(let i = 0; i<s.length; i++){
			if(s[i]===' '){
				for( let p = 0; p<=i; p++){
					return s[p];
				}
			}
		}
	}
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
