import { BaseDatabase } from "./baseDataBase";

export class ProductDataBase extends BaseDatabase {
    private static TABLE_NAME = "amaro_products";
    private static TABLE_NAME_TAGS = "amaro_tags";

    public async insertProduct(product:any): Promise<void> {
        await this.getConnection()
            .insert({
                id: product.id,
                name: product.name,
            })
            .into(ProductDataBase.TABLE_NAME);
    }

    public async insertTag(tag:any): Promise<void> {
        await this.getConnection()
            .insert({
                tag_id: tag.id,
                product_id: tag.product_id,
                tag: tag.tag,
            })
            .into(ProductDataBase.TABLE_NAME_TAGS);
    }

    public async getProductById(id:string): Promise<any> {
        const result = await this.getConnection().raw(`
            SELECT amaro_products.name as PRODUCT,
            GROUP_CONCAT(DISTINCT amaro_tags.tag) as TAGS
            FROM amaro_products
            LEFT JOIN amaro_tags on amaro_products.id = amaro_tags.product_id
            WHERE amaro_products.id = "${id}"
        `)
        return result[0];
    }

    public async getAllProducts(): Promise<any> {
        const result = await this.getConnection().raw(`
            SELECT amaro_products.name as PRODUCT,
            GROUP_CONCAT(DISTINCT amaro_tags.tag) as TAGS
            FROM amaro_products
            LEFT JOIN amaro_tags on amaro_products.id = amaro_tags.product_id
            GROUP BY amaro_products.id
        `)
        return result[0];
    }
}
