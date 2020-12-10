import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModalService } from '../../services/modal';
import { environment } from '../../environments/environment'

@Component({
  selector: 'simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent {
  
  heroVotes: any = [];
  total: any;
  startstop: string = 'Start';
  loop: boolean = false;
  count: any = 0;

  constructor(private http: HttpClient, private modalService: ModalService) {
    let that = this;
    setInterval(function() { 
      that.getVotes();
    },3000);
  }

  simulate() {
    let that = this;
    if (this.startstop == 'Start') {
      let loop = setInterval(function () {
        if (that.startstop == 'Start') clearInterval(loop);
        else that.makeRequest();
      }, 1000)
      this.startstop = "Stop";
    } else this.startstop = "Start";
  }

  clean() {
    this.http.get('http://' + environment.backend + '/cleanVotes')
      .subscribe(res => {
        alert('Votes Cleared from Database.')
        this.count = 0;
      })
  }

  makeRequest() {
    this.http.get('http://' + environment.backend + '/votesim')
      .subscribe(res => {
        this.count = this.count + 1;
      })
  }

  openModal(id: string) {
    this.modalService.open(id);
    this.getVotes();
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  getVotes() { 
    this.http.get('http://' + environment.backend + '/getVoteTotal')
    .subscribe(res => {
      this.total = res['votes'];
    })
    this.http.get('http://' + environment.backend + '/getVotes')
    .subscribe(res => {
      this.heroVotes = res;
    })
  }
}