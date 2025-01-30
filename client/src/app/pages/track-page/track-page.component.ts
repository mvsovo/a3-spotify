import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { TrackFeature } from '../../data/track-feature';

@Component({
    selector: 'app-track-page',
    templateUrl: './track-page.component.html',
    styleUrls: ['./track-page.component.css'],
    standalone: false
})
export class TrackPageComponent implements OnInit {
	id:string;
	track:TrackData;
  audioFeatures:TrackFeature[];
  //featureTypes = TrackFeatures.FeatureTypes;

  constructor(private route: ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
  	// this.trackId = this.route.snapshot.paramMap.get('id');
  	//TODO: Inject the spotifyService and use it to get the track data and it's audio features
  }

}
