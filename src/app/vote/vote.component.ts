import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Component({
  selector: 'vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent {
  hasVoted = false;
  votedText: string;
  selectedHero: any = null;
  allHeros: any;
  heroVotes: any = [];
  constructor(private http: HttpClient) {
    let that = this;
    this.getVotes();
    this.getVoteText();
    this.getVoteAmt();

    setInterval(function () {
      that.getVoteAmt();
    }, 5000)
  }

  getVotes() {
    console.log('meepity meepity meep');
    console.log(environment.backend);
    this.http.get('http://' + environment.backend + '/getVotes', {})
      .subscribe(res => {
        this.allHeros = res;
      }, (err) => { console.log('err: ' + JSON.stringify(err)); })
  }

  getVoteAmt() {
    console.log('meepity meepity moop');
    console.log(environment.backend);
    this.http.get<any[]>('http://' + environment.backend + '/getVotes', {})
      .subscribe(res => {
        console.log(JSON.stringify(res));
        res.forEach((r) => { 
          console.log(r.short + ' has '+ r.votes);
          this.heroVotes[r.short] = r.votes;
        })
        // this.allHeros = res;
      }, (err) => { console.log('err: ' + JSON.stringify(err)); })
  }

  clickEvent(x) {
    if (localStorage.getItem('voted') !== 'true') {
      if (this.selectedHero == x.short) {
        this.selectedHero = null;
        this.votedText = 'Select a hero'
      } else {
        this.selectedHero = x.short;
        this.votedText = 'Vote for ' + this.allHeros.find(obj => { return obj.short === this.selectedHero }).name;
      }
    }
  }

  castVote() {
    if (this.selectedHero == null) this.votedText = "Hey! Pick a Hero!"
  
    localStorage.setItem('voted', 'true');
    this.http.post('http://' + environment.backend + '/castVote', { hero: this.selectedHero })
    .subscribe(res => {
      this.getVotes();
      this.getVoteText();
    }, (err) => { console.log('err: ' + JSON.stringify(err)); })
    
  }

  getVoteText() {
    if (localStorage.getItem('voted') == 'true') this.hasVoted = true;
    if (this.hasVoted) this.votedText = 'Thanks for Voting!'
    else this.votedText = 'Select a Hero';
  }
}