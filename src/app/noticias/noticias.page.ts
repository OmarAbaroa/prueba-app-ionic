import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NoticiasService } from './../service/noticias.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  noticias = null;
  id: any;
  singleNoticia = null;
  constructor(private noticiasService: NoticiasService, private router: Router, public modalController: ModalController) { }

  ngOnInit() {
    this.noticias = null;
    this.id = null;
    this.singleNoticia = null;
    this.noticiasService.getAllNews().subscribe(result => {
      this.noticias = result;
      console.log(this.noticias);
    })
  }

  getOneNew(id){
    
    this.noticiasService.getOneNew(id).subscribe(result => {
      this.singleNoticia = result;
      this.id = id;
      console.log(this.singleNoticia, 'SINGLE');
    })
  }

  getAllNews(){
    this.noticiasService.getAllNews().subscribe(result => {
      this.noticias = result;
      this.singleNoticia = null;
      this.id = null;
      console.log(this.noticias);
    })
  }
  
}
