// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    return;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;
    if (this.health <= 0) return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;
    if (this.health <= 0) return `A Saxon has died in combat`;
  }
}
let tst = new Saxon();

// War
class War {
  vikingArmy = [];
  saxonArmy = [];
  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
  }
  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
  }
  vikingAttack() {
    let generateRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let generateRandomViking = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    let randomSaxon = this.saxonArmy[generateRandomSaxon];
    let randomViking = this.vikingArmy[generateRandomViking];
    let resultOfCallReceiveDamage = randomSaxon.receiveDamage(
      randomViking.strength
    );
    if (randomSaxon.health <= 0)
      this.saxonArmy = this.saxonArmy.filter((el) => el !== randomSaxon);
    return resultOfCallReceiveDamage;
  }
  saxonAttack() {
    let generateRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let generateRandomViking = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    let randomSaxon = this.saxonArmy[generateRandomSaxon];
    let randomViking = this.vikingArmy[generateRandomViking];
    let resultOfCallReceiveDamage = randomViking.receiveDamage(
      randomSaxon.strength
    );
    if (randomViking.health <= 0)
      this.vikingArmy = this.vikingArmy.filter((el) => el !== randomViking);
    return resultOfCallReceiveDamage;
  }
  showStatus() {
    if (this.saxonArmy.length === 0)
      return "Vikings have won the war of the century!";
    if (this.vikingArmy.length === 0)
      return "Saxons have fought for their lives and survived another day...";
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0)
      return "Vikings and Saxons are still in the thick of battle.";
  }
  genericMethod(armyAttack) {
      let generateRandomDefense = Math.floor(
        Math.random() * this.saxonArmy.length
      );
      let generateRandomAttack = Math.floor(
        Math.random() * this.vikingArmy.length
      );
    if (armyAttack === "vikings") {
        let randomAttack = this.vikingArmy[generateRandomViking];
      let randomDefeat = this.saxonArmy[generateRandomSaxon];
    }
    if (armyAttack === "saxons") {
      let randomAttack = this.saxonArmy[generateRandomSaxon];
      let randomDefeat = this.vikingArmy[generateRandomViking];
    }
    let resultOfCallReceiveDamage = (armyAttacked, ArmyDefeat) =>
      randomViking.receiveDamage(randomSaxon.strength);
    return resultOfCallReceiveDamage(randomAttack, randomDefeat);
  }
}
