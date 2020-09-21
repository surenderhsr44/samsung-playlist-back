"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class PlayListService {
    constructor() {
        // our database
        this.adapter = new FileSync(__dirname + '/../data/playList.json');
        this.db = lowdb(this.adapter);
    }
    // get all the playlist
    getPlayList() {
        return this.db.get('playlist').value();
    }
    // create new playlist
    createPlayList(name, songs) {
        const data = this.db.get('playlist').value();
        data.push({ "id": data.length, "name": name, "songs": songs });
        this.db.set('playlist', data).write();
        return data;
    }
    // update  playlist
    updatePlayList(id, songs) {
        let data = this.db.get('playlist').value();
        let node = data.find(playlist => playlist.id === id);
        let dataIndex = data.indexOf(node);
        node.songs = songs;
        data[dataIndex] = node;
        this.db.set('playlist', data).write();
        return data;
    }
    // delete  playlist
    deletePlayList(id) {
        let data = this.db.get('playlist').value();
        this.db.set('playlist', data.filter(playlist => playlist.id !== id)).write();
        return data;
    }
}
exports.PlayListService = PlayListService;
//# sourceMappingURL=playlist.service.js.map