export interface IRouteData {
    path: string;
    fullPath: string;
}

export enum RouteNames {
    ProjectList,
    ProjectDetails,
    PaymentPage,
    ThankYouPage
}

export const appRoutes: { [key in keyof typeof RouteNames]: IRouteData } = {
    ProjectList: { path: '', fullPath: '' },
    ProjectDetails: { path: 'project/:id', fullPath: 'project/:id' },
    PaymentPage: { path: 'pay', fullPath: 'project/:id/pay' },
    ThankYouPage: { path: 'thank-you', fullPath: 'thank-you' }
};
