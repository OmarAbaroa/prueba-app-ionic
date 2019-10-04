import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'noticias',
    pathMatch: 'full'
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then(m => m.NoticiasPageModule)
  },
  { path: 'calendario', loadChildren: './calendario/calendario.module#CalendarioPageModule' },
  { path: 'filtro', loadChildren: './filtro/filtro.module#FiltroPageModule' },
  { path: 'facebook', loadChildren: './facebook/facebook.module#FacebookPageModule' },
  { path: 'buscar', loadChildren: './buscar/buscar.module#BuscarPageModule' },
  { path: 'noticia-detalle/:id', loadChildren: './noticia-detalle/noticia-detalle.module#NoticiaDetallePageModule' },
  { path: 'noticias/:id', loadChildren: './noticias/noticias.module#NoticiasPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
