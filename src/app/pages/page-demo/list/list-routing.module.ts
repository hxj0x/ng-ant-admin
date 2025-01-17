import { Route } from '@angular/router';

export default [
  { path: '', redirectTo: 'search-table', pathMatch: 'full' },
  { path: 'search-table', loadChildren: () => import('./search-table/search-table-routing') },
  { path: 'standard-table', data: { title: '标准表格', key: 'standard-table' }, loadComponent: () => import('./standard-table/standard-table.component').then(m => m.StandardTableComponent) },
  { path: 'tree-list', data: { title: '树状表格', key: 'tree-list' }, loadComponent: () => import('./tree-list/tree-list.component').then(m => m.TreeListComponent) },
  { path: 'card-table', data: { title: '卡片列表', key: 'card-table' }, loadComponent: () => import('./card-table/card-table.component').then(m => m.CardTableComponent) },
  { path: 'search-list', loadChildren: () => import('./search-list/search-list-routing') }
] as Route[];
