import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vitePluginSvgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), vitePluginSvgr()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		rollupOptions: {
			// external: ["react", "react-dom", "styled-components"],
		},
	},
	base: "/KUIT3_Hackathon_Team5-Web/",
});
