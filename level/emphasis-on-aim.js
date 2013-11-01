var unit = this.getNearestCombatant();

// Check the unit's team before opening fire.
// There are three teams: "ogres", "allies", and "humans".
if (unit && unit.team == 'ogres') {
  this.say('Perish, ' + unit.id + ' of the ' + unit.team);
  this.attack(unit);
} else {
  this.say('All clear.');
}

