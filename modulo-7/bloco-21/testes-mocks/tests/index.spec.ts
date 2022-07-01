import { TestScheduler } from "jest";
import { validateCharacter, character, performAttack } from "../src";



test("deve retornar false quando um personagem estiver com o nome vazio", () => {

    const character: character = {
        name: "",
        life: 1,
        strength: 1,
        defense: 1
    }

    expect(validateCharacter(character)).toBe(false);
});

test("deve retornar false quando um personagem estiver com a força igual a zero", () => {

    const character: character = {
        name: "morgana",
        life: 1,
        strength: 0,
        defense: 1
    }

    expect(validateCharacter(character)).toBe(false);
});

test("deve retornar false quando um personagem estiver com a vida igual a zero", () => {

    const character: character = {
        name: "tryndamere",
        life: 0,
        strength: 1,
        defense: 1
    }

    expect(validateCharacter(character)).toBe(false);
})

test("deve retornar false quando um personagem estiver com a defesa igual a zero", () => {

    const character: character = {
        name: "jax",
        life: 1,
        strength: 1,
        defense: 0
    }

    expect(validateCharacter(character)).toBe(false);
})

test("deve retornar false quando um personagem estiver com a vida ou a força ou a defesa com um valor negativo", () => {

    const character: character = {
        name: "ashe",
        life: -1,
        strength: 1,
        defense: 1
    }

    expect(validateCharacter(character)).toBe(false);

    const character2: character = {
        name: "kayle",
        life: 1,
        strength: -1,
        defense: 1
    }

    expect(validateCharacter(character2)).toBe(false);

    const character3: character = {
        name: "kai'sa",
        life: 1,
        strength: 1,
        defense: -1
    }

    expect(validateCharacter(character3)).toBe(false);
})

test("deve retorna true quando um personagem estiver com todos os atributos corretos", () => {

    const character: character = {
        name: "darius",
        life: 1,
        strength: 1,
        defense: 1
    }

    expect(validateCharacter(character)).toBe(true);
})

const mockvalidateCharacterFalse = jest.fn(() => false);
const mockvalidateCharacterTrue = jest.fn(() => true);

test("deve retornar que o defensor perdeu 200 pontos de vida.", () => {

    const attacker: character = {
        name: 'lucian',
        life: 400,
        strength: 600,
        defense: 100
    }

    const defender: character = {
        name: 'jax',
        life: 1200,
        strength: 200,
        defense: 400
    }

    const result = performAttack(attacker, defender, mockvalidateCharacterTrue);

    expect(result).toBe(1000);
    expect(mockvalidateCharacterTrue).toHaveBeenCalled();
    expect(mockvalidateCharacterTrue).toHaveBeenCalledTimes(2);
    expect(mockvalidateCharacterTrue).toHaveReturnedTimes(2);
})

test("deve retornar que o character é invalido", () => {

    const attacker: character = {
        name: 'lucian',
        life: 400,
        strength: 600,
        defense: 100
    }

    const defender: character = {
        name: 'jax',
        life: 1200,
        strength: 200,
        defense: 400
    }
    try {
        performAttack(attacker, defender, mockvalidateCharacterFalse as any);
    } catch (error) {
        expect(error.message).toBe("Invalid character");
        expect(mockvalidateCharacterFalse).toHaveBeenCalled();
        expect(mockvalidateCharacterFalse).toHaveBeenCalledTimes(1);
        expect(mockvalidateCharacterFalse).toHaveReturnedTimes(1);
    }
})