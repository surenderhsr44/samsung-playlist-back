import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import { PlayListData } from '../data';

export class PlayListService {
  // our database
  adapter = new FileSync(__dirname + '/../data/playList.json');
  db = lowdb(this.adapter);
  constructor() { }

  // get all the playlist
  getPlayList(): PlayListData[] {
    return this.db.get('playlist').value();
  }

  // create new playlist
  createPlayList(name: string, songs: [number]): PlayListData[] {
    const data: [any] = this.db.get('playlist').value();
    data.push({ "id": data.length, "name": name, "songs": songs });
    this.db.set('playlist', data).write();
    return data;
  }
  // update  playlist
  updatePlayList(id: number, songs: [number]): PlayListData[] {
    let data: [PlayListData] = this.db.get('playlist').value();
    let node: PlayListData = data.find(playlist => playlist.id === id)!;
    let dataIndex = data.indexOf(node);
    node.songs = songs;
    data[dataIndex] = node;
    this.db.set('playlist', data).write();
    return data;
  }
  // delete  playlist
  deletePlayList(id: number): PlayListData[] {
    let data: [PlayListData] = this.db.get('playlist').value();
    this.db.set('playlist', data.filter(playlist => playlist.id !== id)).write();
    return data;
  }
}
