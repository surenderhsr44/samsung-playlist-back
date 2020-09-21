import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import { LibraryData } from '../data';

export class LibraryService {
  // our database
  adapter = new FileSync(__dirname +'/../data/library.json');
  db = lowdb(this.adapter);
  constructor() { }

  // get all the Library
  getLibrarys(): LibraryData[] {
    return this.db.get('library').value();
  }
}
