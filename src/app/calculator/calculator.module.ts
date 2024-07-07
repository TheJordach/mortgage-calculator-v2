import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormComponent } from './form/form.component'
import { DisplayResultComponent } from './display-result/display-result.component'
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms'

@NgModule({
    declarations: [FormComponent, DisplayResultComponent, HomeComponent],
    imports: [CommonModule, FormsModule],
    exports: [FormComponent, DisplayResultComponent, HomeComponent],
})
export class CalculatorModule {}
