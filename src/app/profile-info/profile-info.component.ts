import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    templateUrl: './profile-info.component.html',
    selector: 'app-profile-info',
    styleUrls: ['profile-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileInfoComponent {
    
}