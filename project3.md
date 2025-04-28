## Project three Source Code

## HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clock</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="center">
        <div id="banner">
            <span>Your Local Time</span>
        </div>
        <div id="clock">

        </div>
    </div>
</body>
<script src="script.js"></script>
</html>
```

## CSS
```
body{
    background: #212121;
    color: #fff;
}
.center{
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items:center;
    flex-direction: column;
}
#clock{
    font-size: 40px;
    background-color: orange;
    padding: 20px 50px;
    margin-top: 10px;
    border-radius: 10px;
}

```

## SCRIPT

```
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
}, 1000); // 1000 for 1 second in mili second.

```