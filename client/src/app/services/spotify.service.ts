import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArtistData } from '../data/artist-data';
import { AlbumData } from '../data/album-data';
import { TrackData } from '../data/track-data';
import { ResourceData } from '../data/resource-data';
import { ProfileData } from '../data/profile-data';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
	baseUrl:string = 'http://localhost:8888';

  constructor(private http:HttpClient) { }

  private sendRequestToExpress(endpoint:string) {
    return this.http.get(this.baseUrl + endpoint).toPromise().then((response) => {
      return response;
    }, (err) => {
      return err;
    });
  }

  aboutMe():Promise<ProfileData> {
  	return this.sendRequestToExpress('/me').then((data) => {
      return new ProfileData(data);
    });
  }

  searchFor(category:string, resource:string):Promise<ResourceData[]> {
    return this.sendRequestToExpress('/search/' + category + '/' + encodeURIComponent(resource)).then((data) => {
      if(category == 'artist') {
        return data.artists.items.map((artist) => {
          return new ArtistData(artist);
        });
      }
      else if(category == 'track') {
        return data.tracks.items.map((track) => {
          return new TrackData(track);
        });
      }
      else if(category == 'album') {
        return data.albums.items.map((album) => {
          return new AlbumData(album);
        });
      }
    });
  }

  getArtist(artistId:string):Promise<ArtistData> {
    return this.sendRequestToExpress('/artist/' + encodeURIComponent(artistId)).then((data) => {
      return new ArtistData(data);
    });
  }

  getRelatedArtists(artistId:string):Promise<ArtistData[]> {
   return this.sendRequestToExpress('/artist-related-artists/' + encodeURIComponent(artistId)).then((data) => {
     return data.artists.map((artist) => {
        return new ArtistData(artist);
      });
   });
  }

  getTopTracksForArtist(artistId:string):Promise<TrackData[]> {
    return this.sendRequestToExpress('/artist-top-tracks/' + encodeURIComponent(artistId)).then((data) => {
      return data.tracks.map((track) => {
        return new TrackData(track);
      });
    });
  }

  getAlbumsForArtist(artistId:string):Promise<AlbumData[]> {
    return this.sendRequestToExpress('/artist-albums/' + encodeURIComponent(artistId)).then((data) => {
      return data.items.map((album) => {
        return new AlbumData(album);
      });
    });
  }

  getAlbum(albumId:string):Promise<AlbumData> {
    return this.sendRequestToExpress('/album/' + encodeURIComponent(albumId)).then((data) => {
      return new AlbumData(data);
    });
  }

  getTracksForAlbum(albumId:string):Promise<TrackData[]> {
    return this.sendRequestToExpress('/album-tracks/' + encodeURIComponent(albumId)).then((data) => {
      return data.items.map((artist) => {
        return new TrackData(artist);
      });
    });
  }

  getTrack(trackId:string):Promise<TrackData> {
    return this.sendRequestToExpress('/track/' + encodeURIComponent(trackId)).then((data) => {
      return new TrackData(data);
    });
  }
}
