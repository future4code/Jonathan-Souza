export class Products{
    constructor(
    private id: string,
    private name: string,
    private tag: string[],
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name
    }

    getTags(){
        return this.tag;
    }


    setId(id: string){
        this.id = id;
    }

    setName(name: string){
        this.name = name;
    }

    setTag(tag: string[]){
        this.tag = tag;
    }

    static toProductModel(product: any): Products {
        return new Products(product.id, product.name, product.tag);
    }
}