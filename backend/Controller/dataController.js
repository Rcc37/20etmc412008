import sampleSchema from "../Schema/sampleSchema.js";
import request from "request";

export const getAllTrains = async (req, res) => {
  const options = {
    method: "GET",
    url: "http://20.244.56.144/train/trains",
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  };
  request(options, (err, response, body) => {
    if (err) throw new Error(err);
    res.json({body: JSON.parse(response.body)});
  })
};

export const getOneTrain = async (req,res) => {
    const trainID = req.params.train;
    const options = {
        method: "GET",
        url: `http://20.244.56.144/train/trains/${trainID}`,
        headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
    };
    request(options, (err, response, body) => {
        if (err) throw new Error(err);
        res.json({body: JSON.parse(response.body)});
      })
}
