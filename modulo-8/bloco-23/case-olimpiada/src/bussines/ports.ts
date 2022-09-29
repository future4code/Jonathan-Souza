export interface IGenerateId {
    generate: () => string
}

export interface ICheckDataComp {
    checkID: (id:string) => Promise<boolean>
    checkStatus: (id:string) => Promise<boolean>
}