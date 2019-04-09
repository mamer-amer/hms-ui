import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-panel',
  templateUrl: './add-panel.component.html',
  styleUrls: ['./add-panel.component.css']
})
export class AddPanelComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }



addDirectory()
{
  this.router.navigate(['adddirectory']);
}

appoinmentList(){
  this.router.navigate(['/appoinmentList']);
}

  
}
