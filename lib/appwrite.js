import { Client, Account, Avatars, Databases } from 'appwrite';

export const client = new Client()
    .setProject('684f83a500288bd28968')
    .setEndpoint('https://fra.cloud.appwrite.io/v1');

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)