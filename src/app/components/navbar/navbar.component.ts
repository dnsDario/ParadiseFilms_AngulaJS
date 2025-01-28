import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  soyAdmin?: boolean;
  hayToken?: boolean;
  esMovil?: boolean = false;
  opcionesAdmin?: boolean = false;

  constructor(
    private cookie: CookieService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.cookie.get('token')? this.hayToken = true: this.hayToken = false
    this.cookie.get('role') === 'admin'? this.soyAdmin = true : this.soyAdmin = false       

    this.userService.getRoleObservable().subscribe(role => {
      this.soyAdmin = role === 'admin';
    });
    this.userService.getTokenObservable().subscribe(token => {
      token? this.hayToken = true: this.hayToken = false;
    });

    this.checkScreenSize();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    if (typeof window !== 'undefined') {
      if(window.innerWidth <= 1023){
        this.esMovil = true;
      } else {
        this.esMovil = false
      }
    }
    
  }

  doLogout() {
    this.userService.logout()   
  }

  adminOptions(){
    this.opcionesAdmin = !this.opcionesAdmin;
    console.log(this.opcionesAdmin)
  }
  
  adminOptionsFalse(){
    this.opcionesAdmin = false;
  }
}
