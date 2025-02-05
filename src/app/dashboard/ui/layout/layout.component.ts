import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [NgClass, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {
  private fb = inject(FormBuilder);


  public isOpen = false;
  public isViewModal = false;

  public form = this.fb.group({
    name: [''],
    datePrestamo: [''],
    dateDevolucion: [''],
    user: [''],
  });



  toggleSidebar() {
    console.log('click');
    this.isOpen = !this.isOpen;
  }

  toggleViewModal() {
    this.isViewModal = !this.isViewModal;
  }
}
