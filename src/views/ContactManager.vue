<template>
  <div class="contact-manager">
    <div>
      <div>
        <h2>Contact Manager</h2>
        <router-link to="/contacts/add">
          <i class="fa fa-plus"></i>
          New
        </router-link>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima culpa
        totam numquam ipsum explicabo tempore pariatur tempora illum obcaecati
        dolor eius praesentim
      </p>
      <form>
        <input type="text" placeholder="Search name" />
        <input type="submit" value="Search" />
      </form>
    </div>

    <div v-if="!loading && contacts.length > 0">
      <ul>
        <li v-for="contact in contacts" :key="contact.id">
          <ContactCard :contact="contact" />
        </li>
      </ul>
    </div>

    <div v-else-if="!loading && contacts.length === 0">
      <h3>No available contacts!</h3>
    </div>

    <div v-else-if="!loading && errorMessage">
      <h3>Error: {{ errorMessage }}</h3>
    </div>
    <div v-else>
      <LoadingSpinner />
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard";
import { ContactServices } from "@/services/ContactServices";
import LoadingSpinner from "@/components/LoadingSpinner";

export default {
  name: "ContactManager",
  components: { ContactCard, LoadingSpinner },
  data() {
    return {
      loading: false,
      contacts: [],
      errorMessage: null,
    };
  },
  async created() {
    try {
      this.loading = true;
      let response = await ContactServices.getAllContacts();
      this.contacts = response.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error.message;
      this.loading = false;
    }
  },
};
</script>
