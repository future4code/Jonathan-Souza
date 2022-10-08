import { v4 } from "uuid";
import { IGenerateId } from "../bussines/ports";

export class GeneratorID implements IGenerateId{
    generate(): string{
        return v4();
    }
}