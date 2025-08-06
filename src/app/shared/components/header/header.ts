import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.html',
    styleUrl: './header.scss',
})
export class Header {
    // Placeholder for user data
    user = {
        name: 'Admin User',
        initials: 'AU',
    };
}