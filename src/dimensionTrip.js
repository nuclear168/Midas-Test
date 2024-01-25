"use strict";
function minEnergy(start, shops, stations, target) {
    const firstShop = shops[0];
    const lastShop = shops[shops.length - 1];
    const firstStations = stations[0];
    const lastStations = stations[stations.length - 1];
    const energyStart = Math.abs(firstShop - start);
    const energyLastShop = Math.abs(firstShop - firstStations);
    const energyLastStations = Math.abs(lastShop - lastStations);
    const energyTarget = Math.abs(target - lastShop);
    const energyTotal = (energyStart + energyLastShop + energyLastStations + energyTarget);
    return energyTotal;
}
const dimensionTrip = minEnergy(0, [4, 9], [3, 6, 8], 11);
