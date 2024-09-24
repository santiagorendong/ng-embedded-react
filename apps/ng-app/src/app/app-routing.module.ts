import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactAdapterComponent } from './react-adapter/react-adapter.component';

const routes: Routes = [
  {
    path: 'react',
    component: ReactAdapterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
