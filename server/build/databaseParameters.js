"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.release = exports.connect = exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'jsarmient4',
    port: 5432, // default PostgreSQL port
});
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        yield exports.pool.connect();
        console.log('Connected to PostgreSQL database.');
    });
}
exports.connect = connect;
function release() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield exports.pool.connect();
        client.release();
        console.log('Disconnected from PostgreSQL database.');
    });
}
exports.release = release;
