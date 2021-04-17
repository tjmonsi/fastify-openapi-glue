import openapiGlue from "fastify-openapi-glue";
import service from "./service.js";
import securityHandlers from "./security.js";
import { URL } from "url";
const localFile = (fileName) => (new URL(fileName, import.meta.url)).pathname;
const options = {
    specification: localFile('../openApi.json'),
    service,
    securityHandlers
};
export default async function (fastify, opts) {
    fastify.register(openapiGlue, options);
}
;
