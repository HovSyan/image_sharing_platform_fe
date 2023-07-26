import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'app-left-panel',
    templateUrl: 'left-panel.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftPanelComponent {
    
}