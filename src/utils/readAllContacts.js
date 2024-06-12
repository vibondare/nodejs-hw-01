import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const readAllContacts = async () => {
    try {
      const response = await fs.readFile(PATH_DB, 'utf-8');
      const data = JSON.parse(response);
      return data;
    } catch (error) {
      console.log(error);
    }
  };