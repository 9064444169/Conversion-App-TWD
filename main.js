document.getElementById("kgsInput").addEventListener("input" , e => {
    let kgs=e.target.value;
    document.getElementById("lbsOutput").innerText = kgs * 2.2046;
})

document.getElementById("tempInput").addEventListener("input" , e => {
    let temp=e.target.value;
    document.getElementById("tempOutput").innerText = Math.round((temp * 9/5) + 32);
})

document.getElementById("feetInput").addEventListener("input" , e => {
    let feet=e.target.value;
    document.getElementById("feetOutput").innerText = feet * 30.48;
})


document.getElementById("circleInput").addEventListener("input" , e => {
    let radius=e.target.value;
    document.getElementById("circleOutput").innerText = Math.round(radius * radius) * 3.1416;
})

document.getElementById("volumeInput").addEventListener("input" , e => {
    let radius=e.target.value;
    document.getElementById("volumeOutput").innerText = ((radius * radius *radius) * 4/3 * 3.1416);
})