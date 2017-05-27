import { Component, Injector,  OnInit, OnDestroy  } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AppComponent } from './app.component';
import { ArhkamHorrorService } from './ah.service';

@Component({
  selector: 'ahlcg',
  templateUrl: './homepage.component.html',
  styleUrls: ['./app.component.css'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  startGame = false;
  campaigns: any;
  characters: any;
  difficulties: any;
  hosts: any;
  host: any = null;

  // ONLY CLIENT

  sCampaign = null;
  sDifficulty = null;

  character: any = { a: 0, d: 0, h: 0, r: 5, i: 0 };
  deck: any = null;
  stack: any = [];
  sdiscard: any = [];
  chaosbag: any = null;
  chaos: any = null;
  aCharge: any = [];
  assets: any = [];
  seeDiscard = false;
  seeEDiscard = false;
  sDeck = false;

  player: any = null;

  cc = [];

  ngOnInit() { /* this.connection = this.sAH.getSocket('hosts').subscribe(data => { this.hosts = data; }) */ }
  ngOnDestroy() { /*this.connection.unsubscribe();*/ }
  constructor(private _http: Http, private _route: ActivatedRoute, private _injector:Injector, private sAH: ArhkamHorrorService) {
    this.sAH.get('campaigns').subscribe(data => { this.campaigns = data });
    this.sAH.get('difficulties').subscribe(data => { this.difficulties = data });
    this.sAH.get('characters').subscribe(data => { this.characters = data });

    this.sAH.getSocket('hosts').subscribe(data => {
      this.hosts = data;
    })

    //TODO ALL CARDS
    // for (let o = 16; o <= 95; o++) { this.cc.push(`010${o}`); }

  }
  knuthShuffle(array) {
    var currentIndex = array.length
      , temporaryValue
      , randomIndex
      ;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  fixUrl(id, event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.setAttribute('src', `https://arkhamdb.com/bundles/cards/${id}.jpg`);
  }
  newHost() {
    if (this.sCampaign && this.sDifficulty) {
      this.sAH.newHost({ name: this.sCampaign, difficulty: this.sDifficulty, characters: [] });
    }
  }
  selectCampaign(data) { this.sCampaign = data.value }
  selectDifficulty(data) { this.sDifficulty = data.value }
  selectCharacter(data) {
    this.sAH.get('character', '?id='+data.value).subscribe(data => { this.deck = data });
  }
  availableCharacters(characters) {
    return this.characters.slice(0).filter((x) => !!!characters.find( (c) => (c && c.id === x.id) ));
  }
  play(host) {
    if (this.deck) {
      this.startGame = true;
      this.sAH.play(host.id, this.deck);
      this.sAH.getSocket('host').subscribe(data => {
        if (host.id === data['id']) {
          this.host = data;
        }
      })
      this.chaosbag = host.chaos;
    }
  }
  spectator(host) {
    this.startGame = true;
    this.deck = null;
    this.host = host;
    this.sAH.getSocket('host').subscribe(data => {
      if (host.id === data['id']) {
        this.host = data;
      }
    })
  }
  pickChaos() { this.chaos = this.knuthShuffle(this.chaosbag).slice(0).pop(); }
  newLocation() {
    if (this.host.campaign.location.length > 0) {
      this.host.locations.push({
        id: this.host.campaign.location.shift(),
        seal: true,
        indices: 0,
        cards: [],
        characters: []
      });
      this.sAH.updateHost(this.host);
    }
  }
  openSeal(index) {
    this.host.locations[index].seal = false;
    this.sAH.updateHost(this.host);
  }
  newAgenda() {
    this.host.campaign.agenda_active = this.host.campaign.agenda.shift();
    this.host.dooms = 0;
    this.sAH.updateHost(this.host);
  }
  newAct() {
    this.host.campaign.act_active = this.host.campaign.act.shift();
    this.host.clues = 0;
    this.sAH.updateHost(this.host);
  }
  upDoom() {
    this.host.dooms++;
    this.sAH.updateHost(this.host);
  }
  displayCharge(card) {
    let index = this.host.charges.findIndex((x) => x.id === card);
    return this.host.charges[index].charge;
  }
  charge(card) {
    let index = this.host.charges.findIndex((x) => x.id === card);
    this.host.charges[index].charge++;
    this.sAH.updateHost(this.host);
  }
  drawEncounter() {
    let card = this.host.campaign.encounter.pop();
    this.host.encounters.push(card);
    this.host.charges.push({ id: card, charge: 0 });
    this.sAH.updateHost(this.host);
  }
  discardEncounter(card) {
    let index = this.host.encounters.findIndex((x) => x === card);
    this.host.ediscard.push( this.host.encounters.splice(index, 1) );
    this.sAH.updateHost(this.host);
  }
  moveEncounter(data, card) {
    this.host.locations.forEach( location => {
      let index = location.cards.findIndex((x) => x === card);
      if (index >= 0) { location.cards.splice(index, 1) }
    })
    this.host.locations[data.value].cards.push(card);
    let index = this.host.encounters.findIndex((x) => x === card);
    if (index >= 0) {
        this.host.encounters.splice(index, 1);
    }
    this.sAH.updateHost(this.host);
  }
  discardEncounterInLocation(card, i) {
    let index = this.host.locations[i].cards.findIndex((x) => x === card);
    this.host.ediscard.push( this.host.locations[i].cards.splice(index, 1) );
    this.sAH.updateHost(this.host);
  }
  moveCharacter(i) {
    let player = this.deck.id;
    this.host.locations.forEach( location => {
      let index = location.characters.findIndex((x) => x === player);
      if (index >= 0) { location.characters.splice(index, 1) }
    })
    this.host.locations[i].characters.push(player);
    this.sAH.updateHost(this.host);
  }
  upClue() {
    this.host.clues++;
    this.sAH.updateHost(this.host);

    //CHANGE HERE - Character in host ?
    this.character.i--;
  }
  upIndice(index) {
    this.host.locations[index].indices++;
    this.sAH.updateHost(this.host);
    this.character.i++;
  }

  // ONLY CLIENT

  seeDeck() {
    this.sDeck = !this.sDeck;
    if (!this.sDeck) {
      this.deck.stack = this.knuthShuffle(this.deck.stack);
    }
  }
  drawDeck() {
    let card = this.deck.stack.pop();
    this.stack.push(card);
    this.aCharge[card] = 0;
  }
  discard(card) {
    let index = this.stack.findIndex((x) => x === card);
    this.sdiscard.push( this.stack.splice(index, 1) );
  }
  equip(card) {
    let index = this.stack.findIndex((x) => x === card);
    this.assets.push( this.stack.splice(index, 1) );
  }
  discardAsset(card) {
    let index = this.assets.findIndex((x) => x === card);
    this.sdiscard.push( this.assets.splice(index, 1) );
  }
  backStack(card) {
    let index = this.sdiscard.findIndex((x) => x === card);
    this.stack.push( this.sdiscard.splice(index, 1) );
  }
  deckToStack(card) {
    let index = this.deck.stack.findIndex((x) => x === card);
    this.stack.push( this.deck.stack.splice(index, 1) );
  }

}
