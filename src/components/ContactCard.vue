<template>
  <section>
    <div>
      <img :src="contact.photo" alt="Avatar" />
    </div>
    <div>
      <ul>
        <li>
          Name: <span>{{ contact.name }}</span>
        </li>
        <li>
          Mobile: <span>{{ contact.mobile }}</span>
        </li>
        <li>
          Email: <span>{{ contact.email }}</span>
        </li>
      </ul>

      <ul>
        <li>
          <router-link :to="`/contacts/view/${contact.id}`">
            <i class="fa fa-eye"></i>
          </router-link>
        </li>
        <li>
          <router-link :to="`/contacts/edit/${contact.id}`">
            <i class="fa fa-pen"></i>
          </router-link>
        </li>
        <li>
          <button @click="removeContact(contact.id)">
            <i class="fa fa-trash"></i>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { ContactServices } from "@/services/ContactServices";
export default {
  name: "ContactCard",
  props: ["contact"],
  methods: {
    async removeContact(contactId) {
      try {
        let res = await ContactServices.deleteContact(contactId);
        return res;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
