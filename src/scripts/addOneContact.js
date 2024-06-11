import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';
import { getAllContacts } from './getAllContacts.js';

export const addOneContact = async () => {
  const data = await getAllContacts();
  data.push(createFakeContact());

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf-8');
    console.log('Contact has been added successfully!');
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
