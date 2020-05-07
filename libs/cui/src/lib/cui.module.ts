import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, MenuBarComponent]
})
export class CuiModule {}
