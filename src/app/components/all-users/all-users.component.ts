import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from '../../../../src/app/Shared/Models/user';
import { EmployeeService } from '../../../../src/app/Shared/Services/Employees/employee.service';
import { UsersService } from '../../../../src/app/Shared/Services/Users/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: User[];
  GetUnregisteredUsers: any;
  NewUser: User;
  AllEmployees: any;
  NewLeaveDialogbool: boolean;

  constructor(private userService: UsersService, private EmpService: EmployeeService, private confirmationService: ConfirmationService, private messageService: MessageService

  ) {
    this.NewUser = { email: '', role: 'User', userName: '', password: 'P@ssw0rd' };
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data;
        console.log(data)
      },
      error => console.log(error)
    );
    this.EmpService.GetAllEmployees().subscribe(
      data => {
        this.AllEmployees = data;
        console.log(data)
      },
      error => console.log(error)
    );
    this.userService.GetUnregisteredUsers().subscribe(
      data => this.GetUnregisteredUsers = data,
      error => console.log(error)
    )
  }

  addNewUser() {
    console.log(this.NewUser);
    this.userService.addUser(this.NewUser).subscribe(
      data => {
        this.NewLeaveDialogbool = false;
        this.ngOnInit()
      }
    )
  }
  NewUserDialog() {
    this.NewLeaveDialogbool = true;
  }
  onChange(event) {
    this.AllEmployees.forEach(element => {
      if (element.id == event) {
        this.NewUser.email = element.email;
        this.NewUser.userName = element.name;
      }
    });
  }

  confirm(id) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.userService.delete(id).subscribe(
          data => {
            this.ngOnInit(),
              this.messageService.add({ severity: 'info', summary: 'Record Deleted!', detail: 'Record Deleted!' });
          }
        )
      }
    });
  }
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
