// parseFloat
function myParseFloat(str) {
    let res = str.trim()
    if(isNaN(res[0])) return NaN
    
    let myRes = ""
    if(res[0] === "0" ) {
        for(let i = 1 ; i < res.length ; i++) {
            if(res[i] !== "0") {
                for(let j = i ; j < res.length ; j++) {
                    if(!isNaN(+res[j]) || res[j] === "." && !myRes.includes(".")){
                        if(res[j] === "." && isNaN(+res[j + 1])) return myRes
                        myRes = myRes + res[j]
                    }
                    else return myRes
                } return myRes
            }
        }
     } else {
        for(let i = 0 ; i < res.length ; i++) {
            if(!isNaN(+res[i]) || res[i] === "." && !myRes.includes(".")) {
                if(res[i] === "." && isNaN(+res[i + 1])) return myRes
                myRes = myRes +res[i]
            }
            else return myRes
        }
     }
    
    return myRes
}
console.log(myParseFloat("01102.a1a2.1a2dq")) //'123.123.55hello'
