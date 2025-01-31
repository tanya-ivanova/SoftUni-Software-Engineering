import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private usersSubj$$ = new BehaviorSubject<Object | null>(null);
    private isLoading$$ = new BehaviorSubject<boolean>(false);

    userObs$ = this.usersSubj$$.asObservable();
    isLoadingUsers$ = this.isLoading$$.asObservable();

    constructor(
        private http: HttpClient,
    ) { }

    loadUsers(): void {
        this.usersSubj$$.next(null);
        this.isLoading$$.next(true);

        this.http.get('/api/users').subscribe({
            next: users => {
                this.isLoading$$.next(false);
                this.usersSubj$$.next(users);
            }
        })
    }
}
