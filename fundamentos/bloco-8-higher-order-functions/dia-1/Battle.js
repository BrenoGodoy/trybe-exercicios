const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: mageDamageAndMana(intelligence, mana),
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: warriorDamage(strength, weaponDmg),
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: dragonDamage(strength),
  };
  
  const battleMembers = { mage, warrior, dragon };

const dragonDamage = (strength) => {
  const min = Math.ceil(15);
  const max = Math.floor(strength);
  const resultado = Math.floor(Math.random() * (max - min)) + min;
  return resultado;
}

const warriorDamage = (strength, weaponDmg) => {
  const min = Math.ceil(strength);
  const max = Math.floor(strength * weaponDmg);
  const resultado = Math.floor(Math.random() * (max - min)) + min;
  return resultado;
}

const mageDamageAndMana = (intelligence, mana) => {
  let mana = mana;
  const min = Math.ceil(intelligence);
  const max = Math.floor(intelligence * 2);
  const resultado = Math.floor(Math.random() * (max - min)) + min;

  if (mana >= 15) {
    mana -= 15;
    return resultado;
  } else {
    return 'Não possui mana suficiente';
  }
}
