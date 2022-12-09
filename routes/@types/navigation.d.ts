export interface PrivateParams {
    id: string | undefined;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Private: PrivateParams;
        }
    }
}
