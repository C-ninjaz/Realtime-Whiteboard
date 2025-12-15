import session from 'express-session';
import Keycloak from 'keycloak-connect';

const memoryStore = new session.MemoryStore();

const keycloak = new Keycloak(
  { store: memoryStore },
  {
    realm: "whiteboard-realm",
    "auth-server-url": "http://localhost:8080/",
    "ssl-required": "external",
    resource: "whiteboard-client",
    "confidential-port": 0
  }
);

export { keycloak, memoryStore, session };

