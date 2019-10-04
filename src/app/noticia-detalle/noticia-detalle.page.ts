import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia-detalle',
  templateUrl: './noticia-detalle.page.html',
  styleUrls: ['./noticia-detalle.page.scss'],
})
export class NoticiaDetallePage implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
     this.id = params['id']; 
     console.log('id', this.id);
    }); 
  }
}
