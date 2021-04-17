// implementation of the security schemes in the openapi specification
import { FastifyReply, FastifyRequest } from 'fastify';


class Security {
  constructor() {}

  initialize(schemes:object){
    // schemes will contain securitySchemes as found in the openapi specification
    console.log("Initialize:", JSON.stringify(schemes));
  }


  // Security scheme: petstore_auth
  // Type: oauth2
  async petstore_auth(req:FastifyRequest, reply: FastifyReply, params:object) {
    console.log("petstore_auth: Authenticating request");
    
    // If validation fails: throw new Error('Could not authenticate request')
    // Else, simply return.

    // The request object can also be mutated here (e.g. to set 'req.user')
  }

  // Security scheme: api_key
  // Type: apiKey
  async api_key(req:FastifyRequest, reply:FastifyReply, params:object) {
    console.log("api_key: Authenticating request");
    
    // If validation fails: throw new Error('Could not authenticate request')
    // Else, simply return.

    // The request object can also be mutated here (e.g. to set 'req.user')
  }
}

export default new Security();
