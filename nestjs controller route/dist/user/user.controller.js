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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
let UserController = class UserController {
    getUser(req, res) {
        console.log('req', req.method);
        return 'User';
    }
    findUserQuery(query, q, lname) {
        console.log('query', query, q, lname);
        return 'Selam';
    }
    findUserById(id) {
        return id;
    }
    wildCard() {
        return 'test';
    }
    updateUser(id, req) {
        console.log(id);
        console.log(req.body);
        return 'Data Güncellendi';
    }
    deleteUser(data) {
        return 'Silindi';
    }
    createUser(data) {
        return 'Yasin';
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", String)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)('/query'),
    __param(0, (0, common_1.Query)('ad')),
    __param(1, (0, common_1.Query)('q')),
    __param(2, (0, common_1.Query)('lastname')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", String)
], UserController.prototype, "findUserQuery", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], UserController.prototype, "findUserById", null);
__decorate([
    (0, common_1.Get)('wildcard|wild*crd'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UserController.prototype, "wildCard", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", String)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(202),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], UserController.prototype, "createUser", null);
UserController = __decorate([
    (0, common_1.Controller)({ path: 'user' })
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map