
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CositaCrochet';
  public sidebarItems =[
    { label:'Inicio', icon:'home', url:'./inicio' },
    { label:'Sobre Nosotros', icon:'label', url:'./acerca' },
    { label:'Misión-Visión', icon:'search', url:'./informacion' },
    { label:'Compra', icon:'money', url:'./compra' },

  ]
}
