import { Component, OnInit } from '@angular/core';
import { PostService } from '../core/servicios/postservice';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {

  //Estoy heredando o implementando el uso de Oninit
  //Varable para asignar los post del backend
  posts:any;

  //para llamar al servicio post qu tiene el metodo listar
  constructor(public postService:PostService){
   
  }

  //el ngOnit es un metodo para inicializar variables cuando esta cargando el componete 
  ngOnInit(): void {

    //Cuando esta cargando el componente se llama al metodo listarPosts 
    this.listarPosts(); 
  }

listarPosts(){
  //llamando al servicio para consumir la lista de posts
  this.postService.listarPosts().subscribe(data=>{

    //Llenar la variable posts con el dato que llega del backend
    this.posts = data;
  })
}
}


