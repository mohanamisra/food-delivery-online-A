const contactAlert = () => {
    alert("Thanks for telling us your issue, we'll get back to you ASAP!");
}

const signupAlert = () => {
    alert("Thanks for signing up! You can go back to the home page now. Happy ordering!");
}

const goToConfirmPage = (foodName, orderTime, imageName) => {
    window.location.href = `./order.html?food=${encodeURIComponent(foodName)}&time=${encodeURIComponent(orderTime)}&image=${encodeURIComponent(imageName)}`;
};

function getNestingLevel(className) {
    let element = document.querySelector(`.${className}`);
    if (!element)
        return -1;

    let level = 0;
    while (element.parentElement) {
        level++;
        element = element.parentElement;
    }
    return level - 1;
}

console.log(getNestingLevel("navbar"));
