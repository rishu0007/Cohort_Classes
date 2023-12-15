const rishuAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hii there from promise')
        }, 50000);
    });
};

 const main = async () => {
    let value = await rishuAsyncFunction();
    console.log("Hi there from main");
    console.log(value);
}

main();