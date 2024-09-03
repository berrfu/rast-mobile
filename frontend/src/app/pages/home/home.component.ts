import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateLinkModalComponent } from '../create_link_modal/create-link-modal.component';

interface SocialMediaLink {
  id: number;
  name: string;
  url: string;
  description?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [HeaderComponent, CommonModule, FormsModule, CreateLinkModalComponent]
})
export class HomeComponent implements OnInit {
  links: SocialMediaLink[] = [
    { id: 1, name: 'Facebook', url: 'https://facebook.com', description: 'Connect with friends and the world around you on Facebook.' },
    { id: 2, name: 'Twitter', url: 'https://twitter.com', description: 'See what’s happening in the world right now.' }
  ];
  
  filteredLinks: SocialMediaLink[] = [];
  searchTerm: string = '';
  showModal: boolean = false;

  ngOnInit() {
    this.filteredLinks = this.links; 
  }

  openCreateAccountModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  addLink(link: SocialMediaLink): void {
    this.links.push(link);
    this.filteredLinks = this.links; 
    this.closeModal(); 
  }

  filterLinks(): void {
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
    this.filteredLinks = this.links.filter(link =>
      link.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      (link.description && link.description.toLowerCase().includes(lowerCaseSearchTerm))
    );
  }
}
