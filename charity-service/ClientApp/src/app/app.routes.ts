export interface IRouteData {
    path: string;
    fullPath: string;
}

export enum RouteNames {
    ProjectList,
    ProjectDescription,
    PaymentPage,
    ThankYouPage
}

export const appRoutes: { [key in keyof typeof RouteNames]: IRouteData } = {
    ProjectList: { path: '', fullPath: '' },
    ProjectDescription: { path: 'project/:id', fullPath: 'project/:id' },
    PaymentPage: { path: 'pay', fullPath: 'project/:id/pay' },
    ThankYouPage: { path: 'thank-you', fullPath: 'thank-you' }
};