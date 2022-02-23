import { isExportDeclaration } from "typescript";
import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("retorna true para array com repetido", () => {
        const meuArray = [1,2,2,3,4,5]

        const check = checaItensDuplicados(meuArray)

        
        expect(check).toEqual(true)
    })

    test("retorna true para array repetido de string", () => {
        const meuArray = ["um","dois","tres","um"]

        const check = checaItensDuplicados(meuArray)

        expect(check).toEqual(true)
    })

    test("retorna false para array sem repetição", () => {
        const meuArray = [1,2,3,4,5]

        const check = checaItensDuplicados(meuArray)

        expect(check).toEqual(false)
    })
});
