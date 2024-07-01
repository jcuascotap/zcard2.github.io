import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-onboarding-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './onboarding-page.component.html',
  styleUrl: './onboarding-page.component.css',
  animations: [
    trigger('fadeInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('0.5s', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeOutLeft', [
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate('0.5s', style({ opacity: 0, transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('fadeInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('0.5s', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeOutRight', [
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate('0.5s', style({ opacity: 0, transform: 'translateX(100%)' }))
      ])
    ])
  ]
})

export class OnboardingPageComponent {
  currentTab = 0;
  selectedImage: string | null = null;
  selectedFile: File | null = null;

  ngOnInit() {
    this.showTab(this.currentTab);
  }

  showTab(n: number) {
    const x = document.getElementsByClassName("step") as HTMLCollectionOf<HTMLElement>;
    x[n].style.display = "block";

    if (n === 0) {
      (document.getElementById("prevBtn") as HTMLElement).style.display = "none";
    } else {
      (document.getElementById("prevBtn") as HTMLElement).style.display = "inline";
    }

    if (n === (x.length - 1)) {
      (document.getElementById("nextBtn") as HTMLElement).innerHTML = "Submit";
    } else {
      (document.getElementById("nextBtn") as HTMLElement).innerHTML = "Next";
    }

    this.fixStepIndicator(n);
  }

  nextPrev(n: number): boolean | void {
    const x = document.getElementsByClassName("step") as HTMLCollectionOf<HTMLElement>;

    if (n === 1 && !this.validateForm()) return false;

    x[this.currentTab].style.display = "none";

    this.currentTab = this.currentTab + n;

    if (this.currentTab >= x.length) {
      (document.getElementById("signUpForm") as HTMLFormElement).submit();
      return false;
    }

    this.showTab(this.currentTab);
  }

  validateForm(): boolean {
    const x = document.getElementsByClassName("step") as HTMLCollectionOf<HTMLElement>;
    const y = x[this.currentTab].getElementsByTagName("input");
    let valid = true;

    for (let i = 0; i < y.length; i++) {
      if (y[i].value === "") {
        y[i].className += " invalid";
        valid = false;
      }
    }

    if (valid) {
      document.getElementsByClassName("stepIndicator")[this.currentTab].className += " finish";
    }

    return valid;
  }

  fixStepIndicator(n: number) {
    const x = document.getElementsByClassName("stepIndicator");
    for (let i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
