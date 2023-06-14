export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  ITEM_LIST = {
    Aged: 'Aged Brie',
    Backstage: 'Backstage passes to a TAFKAL80ETC concert',
    Sulfuras: 'Sulfuras, Hand of Ragnaros',
    Conjured: 'Conjured'
  }

  updateAGED(item: Item) {

    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0 && item.quality < 50) {
      item.quality = item.quality + 1
    }
  }

  updateBACK(item: Item) {

    if (item.quality < 50) {
      item.quality = item.quality + 1

      if (item.sellIn < 11 && item.quality < 50) {
        item.quality = item.quality + 1
      }
      if (item.sellIn < 6 && item.quality < 50) {
        item.quality = item.quality + 1
      }
    }
    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      item.quality = item.quality - item.quality
    }
  }

  updateSULF(item: Item) {

  }

  updateNORMAL(item: Item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1

      if (item.name === this.ITEM_LIST.Conjured) {
        item.quality = item.quality - 1
      }
    }
    item.sellIn = item.sellIn - 1

    if (item.sellIn < 0 && item.quality > 0) {
      item.quality = item.quality - 1

      if (item.name === this.ITEM_LIST.Conjured) {
        item.quality = item.quality - 1
      }
    }
  }

  updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case this.ITEM_LIST.Aged:
          this.updateAGED(item)
          continue
        case this.ITEM_LIST.Backstage:
          this.updateBACK(item)
          continue
        case this.ITEM_LIST.Sulfuras:
          this.updateSULF(item)
          continue
        default:
          this.updateNORMAL(item);
      }
    }

    return this.items
  }

}
