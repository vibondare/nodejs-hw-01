import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';
import { getAllContacts } from './getAllContacts.js';

const generateContacts = async (number) => {
  const data = await getAllContacts();
  for (let i = 0; i < number; i++) {
    data.push(createFakeContact());
  }

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf-8');
    console.log('Contacts data has been added successfully!');
  } catch (error) {
    console.log(error);
  }
};

await generateContacts(5);
