import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ManageComponent } from './manage/manage.component';
import { VaultService } from './vault.service';

@NgModule({
  imports: [CommonModule],
  declarations: [CreateComponent, ManageComponent],
  providers: [VaultService]
})
export class VaultModule {}
