import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) { }

  openLoginModal() {
    const modalRef = this.modalService.open(LoginModalComponent, { size: 'lg' });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
  }

}
