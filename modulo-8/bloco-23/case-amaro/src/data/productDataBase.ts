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
}
