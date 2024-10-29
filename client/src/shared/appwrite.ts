import {Account, Client} from 'appwrite';

const appwriteEndpoint = 'http://localhost/v1';
const appwriteProjectId = '67209afb002c3e89b523';

const client = new Client();

client
  .setEndpoint(appwriteEndpoint)
  .setProject(appwriteProjectId);

const account = new Account(client);

export {client, account, appwriteEndpoint, appwriteProjectId};
