import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  const contacts = await getAllContacts();

  if (contacts.length > 0) {
    const lastContactIndex = contacts.length - 1;
    const newContacts = contacts.slice(0, lastContactIndex);

    try {
      await fs.writeFile(
        PATH_DB,
        JSON.stringify(newContacts, null, 2),
        'utf-8',
      );
      console.log('Removed!');
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("Can't delete last contact. There are no contacts!");
    return;
  }
};

await removeLastContact();
