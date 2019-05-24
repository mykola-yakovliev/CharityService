import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectApiModel } from 'src/generated';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProjectDetailsService {
    constructor(private httpClient: HttpClient) {}

    public getCurrentProject(id: number): Observable<ProjectApiModel> {
        return this.httpClient.get<ProjectApiModel[]>('https://localhost:44318/api/Projects')
            .pipe(
                map(data => data.find(item => item.id == id))
            );
    }
}
