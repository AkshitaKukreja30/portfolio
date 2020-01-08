import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ChartsModule } from 'ng2-charts';
import { MatDialogModule } from '@angular/material/dialog';

const MaterialComponents = [
	MatButtonModule,
	MatSidenavModule,
	MatCardModule,
	MatChipsModule,
	ChartsModule,
	MatDialogModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
