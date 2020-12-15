let x = "D0FFFFFFFFF7FFFF41FCFFFFFFFFFFFF"

const OK = "OK"
const Alarm = "Alarm"
const Warning = "Warning"
const NA = "Not Available"

const base = 16
let s = x
  .replace(/../g, '$&_')
  .slice (0, -1)
  .split ('_')
  .map (
    (y) => parseInt (y, base)
  )
  
console.log(s)

if (s.length > 8) {
	console.log("big one")
}

var block
for (block = 0; block < s.length; block += 8) {
	console.log("Block id is: ", (s[block]&0b00001111))
	var idx
  for (idx = 2;idx < 30; idx++) {
  	var byte = s[Math.floor(idx / 4)]
    var hn
    for (hn = idx % 4; hn < 4; hn++) {
    	console.log("block: " + block + ", byte: " + Math.floor(idx/4) + ", hn: " + hn)
    }
  }
}
