import { textSpanEnd } from "typescript";
import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {

  test("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");

    expect(ehPalindromo).toEqual(true);
  });

  test("retorna false para 'joao'", () => {
    const naoPalindromo = checaPalindromo("joao")

    expect(naoPalindromo).toEqual(false)
  })

  
});
