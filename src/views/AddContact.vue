<template>
  <section>
    <h2>Add New Contact</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sapiente
      perferendis dolor. Cum asperiores veritatis reiciendis dolores. Magni
      magnam reiciendis sapiente porro, explicabo placeat voluptates, quia totam
      omnis nihil consequuntur!
    </p>

    <form @submit.prevent="formSubmission">
      <input type="text" placeholder="Name" v-model="contact.name" />
      <input type="text" placeholder="Photo URL" v-model="contact.photo" />
      <input type="email" placeholder="Email" v-model="contact.email" />
      <input type="number" placeholder="MObile" v-model="contact.mobile" />
      <input type="text" placeholder="Company" v-model="contact.company" />
      <input type="text" placeholder="TItle" v-model="contact.title" />
      <select v-model="contact.groupId">
        <option value="" disabled>Select group</option>
        <option v-for="group in groups" :value="group.id" :key="group.id">
          {{ group.name }}
        </option>
      </select>
      <input type="submit" value="Create" />
    </form>
    <div>
      <img :src="contact.photo" alt="" />
    </div>
  </section>
</template>

<script>
import { ContactServices } from "@/services/ContactServices";

export default {
  name: "AddContact",
  data() {
    return {
      contact: {
        name: "",
        photo: "",
        mobile: "",
        email: "",
        company: "",
        title: "",
        groupId: "",
      },
      groups: [],
    };
  },
  async created() {
    try {
      this.loading = true;
      let response = await ContactServices.getAllGroups();
      this.groups = response.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async formSubmission() {
      try {
        let response = await ContactServices.createContact(this.contact);
        if (response) {
          return this.$router.push("/");
        } else {
          return this.$router.push("/contacts/add");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped></style>
