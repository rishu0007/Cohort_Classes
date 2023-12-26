let timeout;

const debouncePopulateDiv = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        populateDiv();
    }, 1000)
}


const populateDiv = async () => {
    let a = document.getElementById("firstNum").value;
    let b = document.getElementById("secondNum").value;

    // let sum = parseInt(a) + parseInt(b);
    // document.getElementById("finalSum").innerHTML = sum;

    const response = await fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b);
    const ans = await response.text();
    document.getElementById("finalSum").innerHTML = ans;
}