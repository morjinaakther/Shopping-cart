function updatePhoneNumber(Isincrease) {
    const phoneNumberField = document.getElementById('phone-number')
    const phoneNumberString = phoneNumberField.value
    const previousNumber = parseInt(phoneNumberString)

    let newPhoneNumber;

    if (Isincrease) {
        newPhoneNumber = previousNumber + 1;
    }
    else {
        newPhoneNumber = previousNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219
    const phoneTotalElement = document.getElementById('phone-total')
    phoneTotalElement.innerText = phoneTotalPrice;

}


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true)
    updatePhoneTotalPrice(newPhoneNumber)
    calculateSubTotal()

});


document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false)
    updatePhoneTotalPrice(newPhoneNumber)
    calculateSubTotal()
})