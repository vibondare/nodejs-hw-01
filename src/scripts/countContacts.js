// import { PATH_DB } from '../constants/contacts.js';
// import fs from 'fs/promises';
import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
    const contacts = await getAllContacts();
    const amountOfContacts = contacts.length;
    return amountOfContacts;
};

console.log(await countContacts());
