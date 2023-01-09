import { createRouter, createWebHistory } from "vue-router";
import ContactManager from "../views/ContactManager.vue";
import EditContact from "../views/EditContact.vue";
import AddContact from "../views/AddContact.vue";
import ViewContact from "../views/ViewContact.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/contacts",
  },
  {
    path: "/contacts",
    name: "ContactManager",
    component: ContactManager,
  },
  {
    path: "/contacts/edit/:contactId",
    name: "EditContact",
    component: EditContact,
  },
  {
    path: "/contacts/add",
    name: "AddContact",
    component: AddContact,
  },
  {
    path: "/contacts/view/:contactId",
    name: "ViewContact",
    component: ViewContact,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
