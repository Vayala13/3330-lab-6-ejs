import express from "express";
import path from "node:path"

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

app.use(express.static(path.join(import.meta.dirname, "public")));


// Write your code here:
const user = {
	username: "Vivi"
};

const projects = [
	{
		name: "MBMT Case Tracker",
		description: "A case tracker for a law firm's paralegal team: upcoming and overdue deadlines, stale cases, call logs, task templates and a day planner.",
		tech: "React, TypeScript, Express, SQLite",
		demo: "https://mbmt-mvp.onrender.com"
	},
	{
		name: "LLM Cost Optimizer",
		description: "A routing layer that sends each request to the cheapest LLM that can handle it at acceptable quality.",
		tech: "Python, LLM APIs",
		link: "https://github.com/Vayala13/LLM-COST-Autopilot"
	},
	{
		name: "Edumusic",
		description: "Beginner-friendly music lessons for a variety of instruments.",
		link: "https://github.com/Vayala13/Edumusic"
	}
];

app.get("/", (req, res) => {
	res.render("home", { ...user, projects });
});

app.get("/about", (req, res) => {
	res.render("about");
});

app.get("/contact", (req, res) => {
	res.render("contact");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
