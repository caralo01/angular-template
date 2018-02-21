import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SearchComponent } from './components/search/search.component';


const APP_ROUTES: Routes = [
	{ path: 'home', component: PortafolioComponent},
	{ path: 'about', component: AboutComponent},
	{ path: 'producto/:id', component: ProductoComponent},
	{ path: 'buscar/:termino', component: SearchComponent},
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });