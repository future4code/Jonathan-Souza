export interface character {
	name: string;
	life: number;
	strength: number;
	defense: number;
}

export function validateCharacter(character: character): boolean {
	if (!character.name || !character.life || !character.strength || !character.defense) {
		return false;
	}

	if (character.life <= 0 || character.strength <= 0 || character.defense <= 0) {
		return false;
	}

	return true
}

export function performAttack(
	attacker: character,
	defender: character,
	validator: (input: character) => boolean
): any {

	if (!validator(attacker) || !validator(defender)) {
		throw new Error("Invalid character");
	}

	let damage: number = attacker.strength - defender.defense;
	if (damage < 0) {
		damage = 0;
	}

	return defender.life -= damage;
}