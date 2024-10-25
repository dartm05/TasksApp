import { effect, Injectable, signal } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthStateService } from "../services/auth/auth.state.service";
import { User } from "../models/auth/user.model";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService {
  constructor(
    private authStateService: AuthStateService,
    private router: Router
  ) {
    effect(() => {
      this.user.set(this.authStateService.state$());
    });
  }
  user = signal<User | undefined>(undefined);

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.user) {
      this.router.navigate(["login"]);
    }
    return true;
  }
}
