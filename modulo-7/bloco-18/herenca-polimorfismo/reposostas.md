## Exercício 1

```typescript
class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}
}
```

A) Seria possível imprimir a senha (password) atrelada a essa instância?

- não, pois não tem um getter publico.

B) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?

- Uma vez só.

---

## Exercício 2

```typescript
class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}
```

A) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 

- Uma vez só.

B) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?

- Uma vez, pois o super() é o construtor da classe "User" que esta sendo extendida pela classe "Customer".

---

## Exercício 3

A) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?

- Não é possível imprimir password pois a senha está privada e não há um getter público que retorne seu valor.

---

### Exercício 4

```typescript
class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}

    public introduceYourself(): string {
        let saudacoes = "Olá, Bom dia!"
        return saudacoes
    }
}
```
```typescript
let person = new Customer("1", "titioAvo@bdia.com", "Titio Avo", "Bomdia", "visa")

person.introduceYourself()
```

---
### Exercício 5

```typescript
class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}

    public introduceYourself(): string {
        let saudacoes = `Bom dia, eu sou o ${this.name}. `
        return saudacoes
    }
}
```
```typescript
let person = new Customer("1", "titioAvo@bdia.com", "Titio Avo", "Bomdia", "visa")

person.introduceYourself()
```