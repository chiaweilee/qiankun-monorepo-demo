import { defineConfig } from "umi";

export default defineConfig({
  routes: [{ path: "/", component: "index" }, { path: "/umi-demo", component: "demo" }],
});
