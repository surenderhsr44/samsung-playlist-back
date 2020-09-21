"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const PlayList_1 = require("../schemas/PlayList");
const playlist_service_1 = require("../service/playlist.service");
const library_service_1 = require("../service/library.service");
const PlayListInputType_1 = require("../inputType/PlayListInputType");
let default_1 = class default_1 {
    constructor() {
        this.playListService = new playlist_service_1.PlayListService();
        this.libraryService = new library_service_1.LibraryService();
    }
    fetchPlayList() {
        const response = this.playListService.getPlayList();
        return response;
    }
    getPlayList(id) {
        return this.playListService.getPlayList().find(playlist => playlist.id === id);
    }
    playListAdd(req) {
        return this.playListService.createPlayList(req.name, req.songs);
    }
    playListUpdateSongs(req) {
        return this.playListService.updatePlayList(req.id, req.songs);
    }
    albums(playlistData) {
        return this.libraryService.getLibrarys().filter(library => {
            return playlistData.songs.indexOf(library.id) > -1;
        });
    }
    playListRemove(id) {
        return this.playListService.deletePlayList(id);
    }
};
__decorate([
    type_graphql_1.Query(returns => [PlayList_1.default], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], default_1.prototype, "fetchPlayList", null);
__decorate([
    type_graphql_1.Query(returns => PlayList_1.default, { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], default_1.prototype, "getPlayList", null);
__decorate([
    type_graphql_1.Mutation(returns => [PlayList_1.default], { nullable: true }),
    __param(0, type_graphql_1.Arg("req")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PlayListInputType_1.default]),
    __metadata("design:returntype", Object)
], default_1.prototype, "playListAdd", null);
__decorate([
    type_graphql_1.Mutation(returns => [PlayList_1.default], { nullable: true }),
    __param(0, type_graphql_1.Arg("req")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PlayListInputType_1.default]),
    __metadata("design:returntype", Object)
], default_1.prototype, "playListUpdateSongs", null);
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], default_1.prototype, "albums", null);
__decorate([
    type_graphql_1.Mutation(returns => [PlayList_1.default], { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], default_1.prototype, "playListRemove", null);
default_1 = __decorate([
    type_graphql_1.Resolver(of => PlayList_1.default)
], default_1);
exports.default = default_1;
//# sourceMappingURL=PlayListResolver.js.map