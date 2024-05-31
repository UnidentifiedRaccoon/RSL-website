export interface StrapiDataScheme<T> {
    id: number;
    attributes: {
        "createdAt": string,
        "updatedAt": string,
        "publishedAt": string | null
        "content": any[] | null
    } & T
}

export interface StrapObjectScheme<T> {
    data: StrapiDataScheme<T>
    meta: object
}

export interface StrapiArrayScheme<T> {
    data: StrapiDataScheme<T>[]
    meta: {
        pagination: {
            page: number
            pageSize: number
            pageCount: number
            total: number
        }
    }
}

export interface StrapiSimpleResponceScheme<T> {
    data: T
}
