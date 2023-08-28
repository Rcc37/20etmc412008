import express from "express";
import { getAllTrains, getOneTrain } from "../Controller/dataController.js";

const Route = express();

Route.route("/").get(getAllTrains);
Route.route("/train/:train").get(getOneTrain);

export default Route;