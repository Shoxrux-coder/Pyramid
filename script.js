let str = '';

for (let i = 0; i < 5; i++) {
	str += '*';
	document.write(str + '<br>');
}
for (let i = 5; i >= 1; i--) {
	let str = '';
	
	for (let j = 0; j < i; j++) {
		str += '*';
	}
	
	document.write(str + '<br>');
}
for(let i = 1; i <=6; i++){
    for(j = 1; j <= 3; j++){
        document.write(i)
    }
}