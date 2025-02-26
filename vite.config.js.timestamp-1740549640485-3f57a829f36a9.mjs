// vite.config.js
import { defineConfig } from "file:///C:/Users/dell/Desktop/cal_web_/super/example-app/node_modules/vite/dist/node/index.js";
import laravel from "file:///C:/Users/dell/Desktop/cal_web_/super/example-app/node_modules/laravel-vite-plugin/dist/index.js";
import vue from "file:///C:/Users/dell/Desktop/cal_web_/super/example-app/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: ["resources/css/app.css", "resources/js/app.js"],
      refresh: true
    }),
    vue({
      template: {
        transformAssetUrls: {
          // The Vue plugin will re-write asset URLs, when referenced
          // in Single File Components, to point to the Laravel web
          // server. Setting this to `null` allows the Laravel plugin
          // to instead re-write asset URLs to point to the Vite
          // server instead.
          base: null,
          // The Vue plugin will parse absolute URLs and treat them
          // as absolute paths to files on disk. Setting this to
          // `false` will leave absolute URLs un-touched so they can
          // reference assets in the public directory as expected.
          includeAbsolute: false
        }
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkZWxsXFxcXERlc2t0b3BcXFxcY2FsX3dlYl9cXFxcc3VwZXJcXFxcZXhhbXBsZS1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGRlbGxcXFxcRGVza3RvcFxcXFxjYWxfd2ViX1xcXFxzdXBlclxcXFxleGFtcGxlLWFwcFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvZGVsbC9EZXNrdG9wL2NhbF93ZWJfL3N1cGVyL2V4YW1wbGUtYXBwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIGxhcmF2ZWwoe1xuICAgICAgICAgICAgaW5wdXQ6IFsncmVzb3VyY2VzL2Nzcy9hcHAuY3NzJywgJ3Jlc291cmNlcy9qcy9hcHAuanMnXSxcbiAgICAgICAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgICB2dWUoe1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Bc3NldFVybHM6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIFZ1ZSBwbHVnaW4gd2lsbCByZS13cml0ZSBhc3NldCBVUkxzLCB3aGVuIHJlZmVyZW5jZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gU2luZ2xlIEZpbGUgQ29tcG9uZW50cywgdG8gcG9pbnQgdG8gdGhlIExhcmF2ZWwgd2ViXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlcnZlci4gU2V0dGluZyB0aGlzIHRvIGBudWxsYCBhbGxvd3MgdGhlIExhcmF2ZWwgcGx1Z2luXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIGluc3RlYWQgcmUtd3JpdGUgYXNzZXQgVVJMcyB0byBwb2ludCB0byB0aGUgVml0ZVxuICAgICAgICAgICAgICAgICAgICAvLyBzZXJ2ZXIgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICAgICAgYmFzZTogbnVsbCxcbiBcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIFZ1ZSBwbHVnaW4gd2lsbCBwYXJzZSBhYnNvbHV0ZSBVUkxzIGFuZCB0cmVhdCB0aGVtXG4gICAgICAgICAgICAgICAgICAgIC8vIGFzIGFic29sdXRlIHBhdGhzIHRvIGZpbGVzIG9uIGRpc2suIFNldHRpbmcgdGhpcyB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBgZmFsc2VgIHdpbGwgbGVhdmUgYWJzb2x1dGUgVVJMcyB1bi10b3VjaGVkIHNvIHRoZXkgY2FuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZmVyZW5jZSBhc3NldHMgaW4gdGhlIHB1YmxpYyBkaXJlY3RvcnkgYXMgZXhwZWN0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGVBYnNvbHV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1YsU0FBUyxvQkFBb0I7QUFDN1csT0FBTyxhQUFhO0FBQ3BCLE9BQU8sU0FBUztBQUVoQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDSixPQUFPLENBQUMseUJBQXlCLHFCQUFxQjtBQUFBLE1BQ3RELFNBQVM7QUFBQSxJQUNiLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNOLG9CQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU1oQixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU1OLGlCQUFpQjtBQUFBLFFBQ3JCO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQztBQUFBLEVBQ0w7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
