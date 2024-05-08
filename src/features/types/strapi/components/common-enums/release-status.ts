export enum ReleaseStatusEnum {
    DEVELOP = 'DEVELOP',
    DRAFT = 'DRAFT',
    RELEASE = 'RELEASE',
}

export interface ReleaseStatus {
    status: ReleaseStatusEnum

}
