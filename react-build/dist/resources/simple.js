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
const prometheusURL = 'http://127.0.0.1:9090/api/v1/';
// getting all posts
const fetchAlerts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fetch(`${prometheusURL}/rules`);
        res.locals.alerts = yield data.json();
        return next();
    }
    catch (err) {
        return next({
            log: 'Error in alertsController.fetchAlerts',
        });
    }
});
