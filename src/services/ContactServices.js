import axios from "axios";

export class ContactServices {
  static baseURL = " http://localhost:9000";

  static getAllContacts() {
    let dataURL = `${this.baseURL}/contacts`;
    return axios.get(dataURL);
  }

  static getContact(contactId) {
    let dataURL = `${this.baseURL}/contacts/${contactId}`;
    return axios.get(dataURL);
  }

  static createContact(contact) {
    let dataURL = `${this.baseURL}/contacts`;
    return axios.post(dataURL, contact);
  }

  static updateContact(contact, contactId) {
    let dataURL = `${this.baseURL}/contacts/${contactId}`;
    return axios.put(dataURL, contact);
  }

  static deleteContact(contactId) {
    let dataURL = `${this.baseURL}/contacts/${contactId}`;
    return axios.delete(dataURL);
  }

  static getAllGroups() {
    let dataURL = `${this.baseURL}/groups`;
    return axios.get(dataURL);
  }

  static getGroup(contact) {
    let groupId = contact.groupId;
    let dataURL = `${this.baseURL}/groups/${groupId}`;
    return axios.get(dataURL);
  }
}
