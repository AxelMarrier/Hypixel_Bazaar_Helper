async function chargerItems() {
  const response = await fetch('./items.json');
  const items = await response.json();
  return items;
}

async function chargerBazaar() {
  const response = await fetch('https://api.hypixel.net/v2/skyblock/bazaar');
  const bazaar = await response.json();
  return bazaar["products"];
}

/*
chargerBazaar().then(items => {
  console.log(items);
});
*/
