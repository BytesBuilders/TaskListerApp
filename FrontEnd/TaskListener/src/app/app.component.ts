import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Listener';
  private previousScroll = 0;
  private footerVisible = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    if (currentScroll > this.previousScroll && currentScroll + window.innerHeight >= document.documentElement.scrollHeight) {
      this.footerVisible = true;
    } else {
      this.footerVisible = false;
    }

    this.previousScroll = currentScroll;
  }

  shouldShowFooter(): boolean {
    return this.footerVisible;
  }
}
