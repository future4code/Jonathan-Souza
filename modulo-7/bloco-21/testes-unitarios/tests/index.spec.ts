import { performPurchase, User } from "../src";


it("should return user with balance reduced by value", () => {
    const user:User = {
        name: "Ember Spirit",
        balance: 100
    }

    const result = performPurchase(user, 40);
    expect(result).toEqual({name: "Ember Spirit", balance: 60});
});

it("should return user with balance equal to 0", () => {
    const user:User = {
        name: "storm spirit",
        balance: 100
    }

    const result = performPurchase(user, 100);
    expect(result).toEqual({name: "storm spirit", balance: 0});
});

it("should return undefined if user has insufficient balance", () => {
    const user:User = {
        name: "Earth Spirit",
        balance: 10
    };
    const result = performPurchase(user, 20);
    expect(result).toBeUndefined();
});

