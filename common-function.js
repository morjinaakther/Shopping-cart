function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId)
    const currentPhoneTotalString = phoneTotalElement.innerText
    const currentPhoneTotal = parseInt(currentPhoneTotalString)
    return currentPhoneTotal
}

function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId)
    subTotalElement.innerText = value;

}

function calculateSubTotal() {
    // calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total')
    const currentCaseTotal = getTextElementValueById('case-total')

    const cureentSubtotal = currentPhoneTotal + currentCaseTotal


    setTextElementValueById('sub-total', cureentSubtotal)

    // calculate tax
    const taxAmountString = (cureentSubtotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString)
    setTextElementValueById('tax-amount', taxAmount)

    // calculate final amount
    const finalAmount = cureentSubtotal + taxAmount
    setTextElementValueById('final-total', finalAmount)

}