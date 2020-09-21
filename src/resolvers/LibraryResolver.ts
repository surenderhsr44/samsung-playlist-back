import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { LibraryData } from "../data";
import Library from "../schemas/Library";
import { LibraryService } from "../service/library.service"

@Resolver(of => Library)
export default class {
  public libraryService: LibraryService = new LibraryService()

  @Query(returns => [Library], { nullable: true })
  fetchLibrary(): LibraryData[] | undefined {
    const response = this.libraryService.getLibrarys();
    return response;
  }

  @Query(returns => Library, { nullable: true })
  getLibrary(@Arg("id") id: number): LibraryData | undefined {
    const response = this.libraryService.getLibrarys();
    return response.find(library => library.id === id);
  }

  @Query(returns => [Library], { nullable: true })
  getLibraryBySearchString(@Arg("searchString") serachString: string): LibraryData[] | undefined {
    const response = this.libraryService.getLibrarys();
    return response.filter(library => {
      return (library.album.includes(serachString) || library.title.includes(serachString) || library.artist.includes(serachString));
    });
  }

  @Query(returns => [Library], { nullable: true })
  getLibraryBySearchKey(@Arg("searchString") serachString: string, @Arg("key") field: string ): LibraryData[] | undefined {
    const response = this.libraryService.getLibrarys();
    return response.filter(library => {
      if(field==="album")
        return (library.album.includes(serachString));
      if(field==="title")
        return (library.title.includes(serachString));
      if(field==="artist")
        return (library.artist.includes(serachString));
    });
  }
}
