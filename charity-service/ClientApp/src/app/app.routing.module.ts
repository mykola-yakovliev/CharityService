import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
    imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
    providers: [],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule {}