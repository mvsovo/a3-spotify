import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';

@Component({
    selector: 'app-artist-page',
    templateUrl: './artist-page.component.html',
    styleUrls: ['./artist-page.component.css'],
    standalone: false
})
export class ArtistPageComponent implements OnInit {
	id:string;
	artist:ArtistData;
	relatedArtists:ArtistData[];
	topTracks:TrackData[];
	albums:AlbumData[];

  constructor(private route: ActivatedRoute, private spotifyService:SpotifyService) { }

  ngOnInit() {
	// this.artistId = this.route.snapshot.paramMap.get('id');
  //TODO: Inject the spotifyService and use it to get the artist data, related artists, top tracks for the artist, and the artist's albums
  }

}