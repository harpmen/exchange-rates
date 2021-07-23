'use strict';
function updateExchangeRates(update) {
    const changeDate = document.getElementById('date');
    changeDate.textContent = update.date;
    const usdBuyRate = document.getElementById('usd-buy-rate');
    usdBuyRate.textContent = update.usd.buyRate;
    const usdSellRate = document.getElementById('usd-sell-rate');
    usdSellRate.textContent = update.usd.sellRate;
    const eurBuyRate = document.getElementById('eur-buy-rate');
    eurBuyRate.textContent = update.eur.buyRate;
    const eurSellRate = document.getElementById('eur-sell-rate');
    eurSellRate.textContent = update.eur.sellRate;
}
updateExchangeRates(update);