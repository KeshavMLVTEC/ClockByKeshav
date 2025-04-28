// selecting clock id by two method you can use anyone..
//const clock= document.getElementById('clock')
// i use this..
const clock = document.querySelector('#clock')

// ye time bata dega exact
// lekin ab time koh update bhi toh krna hai hr second toh hum use karenge 
// SetIntervel method

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());// console me thodi chalani hai 
    // yeh mujhe clock wale div me chalani hai 
    clock.innerHTML=date.toLocaleTimeString();
}, 1000)

