import { ModuleWithProviders } from '@angular/core';
// Importa o modulo de rotas do Angular 2
import { Routes, RouterModule }   from '@angular/router';

// Importa seus componentes criados
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { TimelineComponent } from './users/timeline/timeline.component';
import { TeamComponent } from './team/team.component';


// Cria nossas Rotas
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: TeamComponent },
  { path: 'users/show/:id', component: TimelineComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/new', component: UserFormComponent},
  { path: 'users/:id', component: UserFormComponent},
  { path: 'users/:id/edit', component: UserFormComponent}
];

// Exporta a constante routing para importarmos ela no arquivo app.module.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);