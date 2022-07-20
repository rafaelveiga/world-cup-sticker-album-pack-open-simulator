const figurinePool = Array.from({ length: 600 })
  .fill(0)
  .map((_, i) => `#${i + 1}`);

const PACK_PRICE = 4;
const albumFilled = [];
const repeated = [];
let packsOpened = 0;

const openPack = (packSize) => {
  for (let i = 0; i < packSize; i++) {
    const figurine = Math.floor(Math.random() * figurinePool.length);
    const figurineId = figurinePool[figurine];

    if (!albumFilled.includes(figurineId)) {
      albumFilled.push(figurineId);
    } else {
      repeated.push(figurineId);
    }
  }
};

while (albumFilled.length < figurinePool.length) {
  openPack(5);
  packsOpened++;
}

console.log("Packs Opened", packsOpened);
console.log("Repeated Figurines", repeated.length);
console.log("Total price paid", packsOpened * PACK_PRICE);
