import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

interface SocialMediaLink {
  id: number;
  name: string;
  url: string;
  description?: string;
}

@Component({
  selector: 'app-create-link-modal',
  standalone: true,
  templateUrl: './create-link-modal.component.html',
  styleUrls: ['./create-link-modal.component.scss'],
  imports: [CommonModule, FormsModule] 
})
export class CreateLinkModalComponent {
  @Input() isVisible: boolean = false;
  @Output() linkAdded = new EventEmitter<SocialMediaLink>();

  private nextId: number = 3;

  newLink: SocialMediaLink = {
    id: this.nextId,
    name: '',
    url: '',
    description: ''
  };

  close(): void {
    this.isVisible = false;
  }

  addLink(): void {
    this.newLink.id = this.nextId++;
    this.linkAdded.emit(this.newLink);
    this.newLink = {
      id: this.nextId,
      name: '',
      url: '',
      description: ''
    };
  }
}
