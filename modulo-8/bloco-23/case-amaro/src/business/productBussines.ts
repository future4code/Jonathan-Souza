import { ProductDataBase } from '../data/productDataBase';
import { 
    InvalidToken,
    UnauthorizedUser
} from '../error/customError';
import { productsInput } from '../model/products';
import { 
    IHashManager,
    IAuthenticator,
    IGenerateId
} from './ports';

const productDB = new ProductDataBase();

export class ProductBussines {
    constructor(
        private authenticator: IAuthenticator,
        private generatorID: IGenerateId
    ){ }

    public async insertProduct(product:productsInput): Promise<void>{ 
        const { name, tag, token } = product;

        const acessToken = await this.authenticator.getData(token);

        if(!acessToken.role && !acessToken.id){
            throw new InvalidToken();
        }

        if(acessToken.role !== "ADMIN"){
            throw new UnauthorizedUser();
        }
        
        const id = this.generatorID.generate();

        const inputProduct = {
            id,
            name
        }

        await productDB.insertProduct(inputProduct)

        const teste = tag.forEach((e: string) => {
            const tagId = this.generatorID.generate();
            const inputTag = {
                id: tagId,
                product_id: id,
                tag: e
            }

            productDB.insertTag(inputTag)
        });       
    }

    public async getProductById(id:string): Promise<any>{
        const result = await productDB.getProductById(id)

        return result;
    }

    public async getProductsByTags(tag:string): Promise<any>{
        const result = await productDB.getAllProducts()
        
        let products: any[] = []
        result.forEach((e: any) => {
            if (e.TAGS.includes(tag)) {
                products.push(e)
            }
        })
       
        return products
    }

    public async getAllProducts(tag?: string): Promise<any>{
        let result = await productDB.getAllProducts()

        if(tag){
            result = await this.getProductsByTags(tag)
        }

        return result;
    }
}