let soldPot = [];
// Determines if a piece of pottery should be sold and updates the price and adds it to the array
export let toSellOrNotToSell = (pottery) => {
    if (pottery.weight >= 6 && !pottery.cracked) {
        pottery.price = 40;
        soldPot.push(pottery);
    } else if (pottery.weight < 6 && !pottery.cracked) {
        pottery.price = 20;
        soldPot.push(pottery);
    }
    return pottery;
}

//returns a copy of array items to be sold
export const usePottery = () => {
    return soldPot.slice();
}