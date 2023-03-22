import { Component } from '@angular/core';
import { Member } from '../_Model/member';
import { MembersService } from '../_Services/Account/members.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent {
  members: Member[];
  constructor(private member: MembersService) {}
  ngOnInit() {
    this.loadMembers();
  }

  loadMembers() {
    this.member.getMembers().subscribe((members) => {
      this.members = members;
    });
  }
}
