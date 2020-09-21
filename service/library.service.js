"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
class LibraryService {
    constructor() {
        // our database
        this.adapter = new FileSync(__dirname + '/../data/library.json');
        this.db = lowdb(this.adapter);
    }
    // get all the Library
    getLibrarys() {
        return this.db.get('library').value();
    }
}
exports.LibraryService = LibraryService;
//# sourceMappingURL=library.service.js.map