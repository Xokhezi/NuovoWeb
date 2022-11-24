import { Component, OnInit } from '@angular/core';
import { fadeCard } from './contact.animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:[
    fadeCard
  ]
})
export class ContactComponent implements OnInit {
  hoverOnContact: any;
  expandedContact: any;
  hoverOnTeam: any;
  expandedTeam: any;
  constructor() {
    this.hoverOnContact = false;
    this.expandedContact = false;
    this.hoverOnTeam = false;
    this.expandedTeam = false;
  }

  ngOnInit(): void {
  }
  hoverSwitch() {
    this.hoverOnContact = !this.hoverOnContact;
  }
  expand() {
    this.expandedContact = !this.expandedContact
  }
  hoverSwitchTeam() {
    this.hoverOnTeam = !this.hoverOnTeam;
  }
  expandTeam() {
    this.expandedTeam = !this.expandedTeam
  }
}
