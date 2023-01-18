<template>
  <section>
    <h2>Edit Contact</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sapiente
      perferendis dolor. Cum asperiores veritatis reiciendis dolores. Magni
      magnam reiciendis?
    </p>

    <form @submit.prevent="formSubmission">
      <input type="text" placeholder="Name" v-model="contact.name" />
      <input type="text" placeholder="Photo URL" v-model="contact.photo" />
      <input type="email" placeholder="Email" v-model="contact.email" />
      <input type="number" placeholder="MObile" v-model="contact.mobile" />
      <input type="text" placeholder="Company" v-model="contact.company" />
      <input type="text" placeholder="TItle" v-model="contact.title" />
      <select v-model="contact.groupId" v-if="groups.length > 0">
        <option value="">Select Group</option>
        <option :value="group.id" v-for="group of groups" :key="group.id">
          {{ group.name }}
        </option>
      </select>
      <input type="submit" value="Update" />
    </form>

    <div>
      <img :src="contact.photo" alt="Avatar" />
    </div>
  </section>
</template>

<script>
import { ContactServices } from "@/services/ContactServices";

export default {
  name: "EditContact",
  data() {
    return {
      contactId: this.$route.params.contactId,
      contact: {},
      groups: [],
    };
  },
  async created() {
    try {
      this.loading = true;
      let contactRes = await ContactServices.getContact(this.contactId);
      let groupRes = await ContactServices.getAllGroups();
      this.groups = groupRes.data;
      this.contact = contactRes.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async formSubmission() {
      try {
        let response = await ContactServices.updateContact(
          this.contact,
          this.contactId
        );
        if (response) {
          return this.$router.push("/");
        } else {
          return this.$router.push(`/contacts/edit/${this.contactId}`);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
