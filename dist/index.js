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
class ObsGenClient {
    constructor(apiKey) {
        const [apiKeyPart, baseId, tableName] = apiKey.split("-");
        this.apiKey = apiKeyPart;
        this.baseId = baseId;
        this.tableName = tableName;
    }
    logEvent(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://api.airtable.com/v0/${this.baseId}/${this.tableName}`;
            const response = yield fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.apiKey}`,
                },
                body: JSON.stringify({ fields: data }),
            });
            if (!response.ok) {
                throw new Error(`Failed to log event: ${yield response.text()}`);
            }
        });
    }
}
exports.default = ObsGenClient;
