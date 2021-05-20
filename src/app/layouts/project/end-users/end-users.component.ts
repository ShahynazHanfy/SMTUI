import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EndUsers } from '../../../../../src/app/Shared/Models/EndUsers';
import { EndUsersService } from '../../../../../src/app/Shared/Services/EndUsers/end-users.service';
@Component({
  selector: 'app-end-users',
  templateUrl: './end-users.component.html',
  styleUrls: ['./end-users.component.css']
})
export class EndUsersComponent implements OnInit {
  lstEndUsers: EndUsers[];
  EndUsersObj:EndUsers;
  Editboolean: boolean;
  displayBasic: boolean;
  NewDialogbool: boolean;
  constructor(private EndUsersService:EndUsersService, private router: Router, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.EndUsersObj={id:0,contactName:'',companyName:'',email:'',phone:'',relevantPhone:''}
    this.EndUsersService.GetAllEndUsers().subscribe(
      res=>{this.lstEndUsers=res},
      err=>console.log(err)
    )
  }
  showBasicDialog(id) {
    this.displayBasic = true;
    this.EndUsersService.GetEndUserById(id).subscribe(
      data => { this.EndUsersObj = data ,console.log("EndUsersObj",this.EndUsersObj)},
      error => { console.log(error) }
    );
  }
  NewDialog() {
    this.NewDialogbool = true;
    this.EndUsersObj={id:0,contactName:'',companyName:'',email:'',phone:'',relevantPhone:''}
  }
  add() {
    this.EndUsersService.insertEndUser(this.EndUsersObj).subscribe(
      res => {
        this.NewDialogbool = false;
        this.ngOnInit(),
        this.messageService.add({ severity: 'info', summary: 'Record Added!', detail: 'Record Added!' });
      },
      error => console.log(error),
    );
  }
  EditDialog(id) {
    this.Editboolean = true;
    this.EndUsersService.GetEndUserById(id).subscribe(
      data => { this.EndUsersObj = data},
      error => { console.log(error) }
    )
  }
  update(id) {
    console.log("id",id)
    this.EndUsersService.updateEndUser(id,this.EndUsersObj).subscribe(
      data => { this.ngOnInit()
        this.messageService.add({ severity: 'info', summary: 'Record Updated!', detail: 'Record Updated!' });
      },
      error => { console.log(error) }
    );
    this.Editboolean = false;
  }
  confirm(id) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.EndUsersService.deleteEndUser(id).subscribe(
          data => {
            this.ngOnInit(),
              this.messageService.add({ severity: 'info', summary: 'Record Deleted!', detail: 'Record Deleted!' });
          }
        )
      }
    });
  }
   //Toast
   showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
  }

  showWarn() {
    this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }

  showTopLeft() {
    this.messageService.add({ key: 'tl', severity: 'info', summary: 'Info', detail: 'Message Content' });
  }

  showTopCenter() {
    this.messageService.add({ key: 'tc', severity: 'info', summary: 'Info', detail: 'Message Content' });
  }

  showBottomCenter() {
    this.messageService.add({ key: 'bc', severity: 'info', summary: 'Info', detail: 'Message Content' });
  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }

  showMultiple() {
    this.messageService.addAll([
      { severity: 'info', summary: 'Message 1', detail: 'Message Content' },
      { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
      { severity: 'info', summary: 'Message 3', detail: 'Message Content' }
    ]);
  }

  showSticky() {
    this.messageService.add({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
  }

  onConfirm() {
    this.messageService.clear('c');
  }

  onReject() {
    this.messageService.clear('c');
  }

  clear() {
    this.messageService.clear();
  }
}

