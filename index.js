/**
 * A wizard can cast a spell if they have the spell prepared.
 * They can also cast it from a scroll even if it is not prepared.
 * @param {boolean} isSpellPrepared - whether the spell is prepared
 * @param {boolean} hasScroll - whether the wizard has a scroll of the spell
 * @returns {boolean} whether the wizard can cast the spell
 */
function canCastSpell(isSpellPrepared, hasScroll) {
  let spellCast;
  if (isSpellPrepared === true || hasScroll === true) {
    spellCast = true;
  } else {
    spellCast = false;
  }
  return spellCast;
}

console.log(canCastSpell(false, false));

/**
 * A creature is hidden from an observer if it is actively hiding
 * or if the observer is not aware of it.
 * @param {boolean} hiding - whether the creature is actively hiding
 * @param {boolean} aware - whether the observer is aware of the creature
 * @returns {boolean} whether the creature is hidden from the observer
 */
function isHidden(hiding, aware) {
  let creatureHidden;
  if (hiding === true || aware === false) {
    creatureHidden = true;
  } else {
    creatureHidden = false;
  }
  return creatureHidden;
}

console.log(isHidden(false, true));

/**
 * A strike hits if the attack value is greater than or equal
 * to the target's armor class (AC).
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @returns {boolean} whether the strike hits
 */
function doesStrikeHit(attack, ac) {
  let hit;
  if (attack >= ac) {
    hit = true;
  } else {
    hit = false;
  }
  return hit;
}
console.log(doesStrikeHit(10, 10));

/**
 * A strike is a critical hit if the attack value is at least
 * 10 greater than the target's armor class (AC).
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @returns {boolean} whether the strike is a critical hit
 */
function doesStrikeCrit(attack, ac) {
  let attackDamage;
  if (attack >= ac + 10) {
    attackDamage = true;
  } else {
    attackDamage = false;
  }
  return attackDamage;
}

console.log(doesStrikeCrit(14, 5));

/**
 * A creature can restore hit points (HP) by healing,
 * but its total HP cannot exceed its maximum HP.
 * @param {number} maxHp - maximum hit points
 * @param {number} currentHp - current hit points
 * @param {number} healAmount - amount to heal
 * @returns {number} total hit points after healing
 */
function heal(maxHp, currentHp, healAmount) {
  let newHp = currentHp + healAmount;

  if (newHp > maxHp) {
    newHp = maxHp;
  } else if (newHp < 0) {
    newHp = 0;
  }

  return newHp;
}

/**
 * When a character uses a skill they have proficiency in,
 * they get to add a bonus to their attempt.
 *
 * | Rank       | Bonus     |
 * | ---        | ---       |
 * | untrained  | 0         |
 * | trained    | level + 2 |
 * | expert     | level + 4 |
 * | master     | level + 6 |
 * | legendary  | level + 8 |
 *
 * @param {number} level - level of the character
 * @param {string} rank - character's proficiency rank
 * @returns {number} the character's proficiency bonus
 */
function getProficiencyBonus(level, rank) {
  let bonus;

  if (rank === "untrained") {
    bonus = 0;
  } else if (rank === "trained") {
    bonus = level + 2;
  } else if (rank === "expert") {
    bonus = level + 4;
  } else if (rank === "master") {
    bonus = level + 6;
  } else if (rank === "legendary") {
    bonus = level + 8;
  }

  return bonus;
}

/**
 * A creature can get a bonus to its armor class (AC) by taking cover.
 * If the creature is behind an obstacle, it gets a +2 bonus to its AC,
 * unless the creature is actively taking cover, in which case it gets
 * a +4 bonus to its AC.
 * A creature that is not behind an obstacle gets no bonus to its AC.
 * @param {boolean} behindObstacle - whether the creature is behind an obstacle
 * @param {boolean} takingCover - whether the creature is actively taking cover
 * @returns {number} the cover bonus to AC
 */
function getCoverBonus(behindObstacle, takingCover) {
  let bonus;

  if (!behindObstacle) {
    bonus = 0;
  } else if (takingCover) {
    bonus = 4;
  } else {
    bonus = 2;
  }

  return bonus;
}

/**
 * A creature's current hit points (HP) is reduced by taking damage.
 * If the damage taken is greater than or equal to double its maximum
 * HP, the creature dies instantly.
 * A creature's HP cannot go below 0 unless it is dead.
 * @param {number} maxHp - maximum hit points
 * @param {number} currentHp - current hit points
 * @param {number} damage - damage taken
 * @returns {number} -1 if the creature dies instantly
 * @returns {number} 0 if the creature's HP drops to 0 or below
 * @returns {number} the creature's remaining HP after taking damage
 */
function getRemainingHp(maxHp, currentHp, damage) {
  if (damage >= maxHp * 2) {
    return -1;
  }

  let newHp = currentHp - damage;

  if (newHp <= 0) {
    return 0;
  }

  return newHp;
}

/**
 * All creatures can see in bright light.
 * Creatures with low-light vision can also see in dim light.
 * Creatures with darkvision can see in all light conditions.
 * @param {string} light - light condition: "bright", "dim", or "dark"
 * @param {string} vision - vision type: "average", "low-light", or "dark"
 * @returns {boolean} whether the creature can see
 */
function canSee(light, vision) {
  if (light === "bright") {
    return true;
  }

  if (light === "dim") {
    return vision === "low-light" || vision === "dark";
  }

  if (light === "dark") {
    return vision === "dark";
  }

  return false;
}

/**
 * A strike deals damage if it hits, unless the strike is a critical hit,
 * in which case it deals double damage.
 * If the strike does not hit, it deals 0 damage.
 * Hint: you can use the functions you wrote above :)
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @param {number} damage - damage on a normal hit
 * @returns {number} damage dealt by the strike
 */
function getStrikeDamage(attack, ac, damage) {
  if (attack < ac) {
    return 0;
  }

  if (doesStrikeCrit(attack, ac)) {
    return damage * 2;
  }

  return damage;
}
