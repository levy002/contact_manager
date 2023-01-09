<template>
  <section>
    <h2>View Contact</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A esse illo
      blanditiis harum adipisci nihil ipsum cumque, sapiente odio neque iusto
      error culpa voluptate enim.
    </p>

    <div v-if="loading && isDataFetched()">
      <div>
        <img :src="contact.photo" alt="Avatar" />
      </div>
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
        <li>
          Company: <span>{{ contact.company }}</span>
        </li>
        <li>
          Title: <span>{{ contact.title }}</span>
        </li>
        <li>
          Group: <span>{{ group.name }}</span>
        </li>
      </ul>
    </div>

    <div v-else-if="!loading && errorMessage">
      <h3>Error: {{ errorMessage }}</h3>
    </div>
    <div v-else>
      <LoadingSpinner />
    </div>

    <div>
      <router-link to="/">
        <i class="fa-solid fa-circle-arrow-left"></i>
        Back
      </router-link>
    </div>
  </section>
</template>

<script>
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import { ContactServices } from "@/services/ContactServices";
export default {
  name: "ViewContact",
  components: { LoadingSpinner },
  data() {
    return {
      contactId: this.$route.params.contactId,
      contact: {},
      group: {},
      loading: false,
      errorMessage: null,
    };
  },
  async created() {
    try {
      this.loading = true;
      let res = await ContactServices.getContact(this.contactId);
      let groupRes = await ContactServices.getGroup(res.data);
      this.group = groupRes.data;
      this.contact = res.data;
      this.llading = false;
    } catch (err) {
      console.log(err);
      this.errorMessage = err.message;
      this.loading = false;
    }
  },
  methods: {
    isDataFetched() {
      return (
        Object.keys(this.contact).length > 0 &&
        Object.keys(this.group).length > 0
      );
    },
  },
};
</script>
