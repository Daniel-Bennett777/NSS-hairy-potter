export const firePottery = (pottery, kilnTemperature) => {
    const isCracked = kilnTemperature > 2200;

    pottery.fired = true;
    pottery.cracked = isCracked;

    return pottery;
}