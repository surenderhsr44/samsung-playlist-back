import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
  Int,
} from "type-graphql";
import { PlayListData, LibraryData } from "../data";
import PlayList from "../schemas/PlayList";
import { PlayListService } from "../service/playlist.service";
import { LibraryService } from "../service/library.service"
import PlayListInputType from "../inputType/PlayListInputType";
@Resolver(of => PlayList)
export default class {
  public playListService: PlayListService = new PlayListService();
  public libraryService: LibraryService = new LibraryService();

  @Query(returns => [PlayList], { nullable: true })
  fetchPlayList(): PlayListData[] | undefined {
    const response = this.playListService.getPlayList();
    return response;
  }

  @Query(returns => PlayList, { nullable: true })
  getPlayList(@Arg("id") id: number): PlayListData | undefined {
    return this.playListService.getPlayList().find(playlist => playlist.id === id);
  }

  @Mutation(returns => [PlayList], { nullable: true })
  playListAdd(@Arg("req") req: PlayListInputType): PlayListData[] | undefined {
    return this.playListService.createPlayList(req.name, req.songs);
  }

  @Mutation(returns => [PlayList], { nullable: true })
  playListUpdateSongs(@Arg("req") req: PlayListInputType): PlayListData[] | undefined {
    return this.playListService.updatePlayList(req.id, req.songs);
  }

  @FieldResolver()
  albums(@Root() playlistData: PlayListData) {
    return this.libraryService.getLibrarys().filter(library => {
      return playlistData.songs.indexOf(library.id) > -1;
    });
  }


  @Mutation(returns => [PlayList], { nullable: true })
  playListRemove(@Arg("id") id: number): PlayListData[] | undefined {
    return this.playListService.deletePlayList(id);
  }
}
