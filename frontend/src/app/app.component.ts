import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ToastrComponent } from "./shared/components/toastr/toastr.component";
// import { LoaderComponent } from "./shared/components/loader/loader.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet]
})
export class AppComponent {

}
