import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { LoginModalService } from '../login-modal.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal, private authService: LoginModalService) { }

  openLoginModal() {
    const modalRef = this.modalService.open(LoginModalComponent, { size: 'sm' });
  }

  ngOnInit() {
  }

}
