import { readAllContacts } from '../utils/readAllContacts.js';

export const countContacts = async () => {
    const contacts = await readAllContacts();
    const amountOfContacts = contacts.length;
    return amountOfContacts;
};

console.log(await countContacts());
