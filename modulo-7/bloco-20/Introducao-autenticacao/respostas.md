## Exercicio 1

    a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

    - Normal, sim pois a chance de conhecidir um id com outro é muito menor.


## Exercicio 2
```typescript
import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

const generateToken = (input: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}
```
    a) O que a linha as string faz? Por que precisamos usar ela ali?

    - ela garante que a informação que ira chegar sera em forma de string, precisamos usar pois o typescipt é uma liguagem tipada.