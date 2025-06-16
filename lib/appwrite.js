import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
    .setProject('684f83a500288bd28968')
    .setPlatform('dev.kylorc.bakebook');

export const account = new Account(client)
export const avatars = new Avatars(client)