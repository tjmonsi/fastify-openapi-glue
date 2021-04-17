import { FastifyRequest, FastifyReply } from 'fastify'
import { FromSchema } from "json-schema-to-ts";

const addPetBodySchema = {
  "type": "object",
  "required": [
    "name",
    "photoUrls"
  ],
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64"
    },
    "name": {
      "type": "string",
      "example": "doggie"
    },
    "photoUrls": {
      "type": "array",
      "xml": {
        "name": "photoUrl",
        "wrapped": true
      },
      "items": {
        "type": "string"
      }
    },
    "status": {
      "type": "string",
      "description": "pet status in the store",
      "enum": [
        "available",
        "pending",
        "sold"
      ]
    }
  },
  "xml": {
    "name": "Pet"
  }
} as const;

export type AddPetRequest = FastifyRequest<{
  Body: FromSchema<typeof addPetBodySchema>
}>;

export type AddPetReply = FastifyReply;
export type AddPetBody = FromSchema<typeof addPetBodySchema>;


