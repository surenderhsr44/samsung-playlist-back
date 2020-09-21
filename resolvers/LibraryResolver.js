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
const Library_1 = require("../schemas/Library");
const library_service_1 = require("../service/library.service");
let default_1 = class default_1 {
    constructor() {
        this.libraryService = new library_service_1.LibraryService();
    }
    fetchLibrary() {
        const response = this.libraryService.getLibrarys();
        return response;
    }
    getLibrary(id) {
        const response = this.libraryService.getLibrarys();
        return response.find(library => library.id === id);
    }
    getLibraryBySearchString(serachString) {
        const response = this.libraryService.getLibrarys();
        return response.filter(library => {
            return (library.album.includes(serachString) || library.title.includes(serachString) || library.artist.includes(serachString));
        });
    }
    getLibraryBySearchKey(serachString, field) {
        const response = this.libraryService.getLibrarys();
        return response.filter(library => {
            if (field === "album")
                return (library.album.includes(serachString));
            if (field === "title")
                return (library.title.includes(serachString));
            if (field === "artist")
                return (library.artist.includes(serachString));
        });
    }
};
__decorate([
    type_graphql_1.Query(returns => [Library_1.default], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], default_1.prototype, "fetchLibrary", null);
__decorate([
    type_graphql_1.Query(returns => Library_1.default, { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], default_1.prototype, "getLibrary", null);
__decorate([
    type_graphql_1.Query(returns => [Library_1.default], { nullable: true }),
    __param(0, type_graphql_1.Arg("searchString")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], default_1.prototype, "getLibraryBySearchString", null);
__decorate([
    type_graphql_1.Query(returns => [Library_1.default], { nullable: true }),
    __param(0, type_graphql_1.Arg("searchString")), __param(1, type_graphql_1.Arg("key")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], default_1.prototype, "getLibraryBySearchKey", null);
default_1 = __decorate([
    type_graphql_1.Resolver(of => Library_1.default)
], default_1);
exports.default = default_1;
//# sourceMappingURL=LibraryResolver.js.map