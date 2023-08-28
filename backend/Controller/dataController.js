import sampleSchema from "../Schema/sampleSchema.js";
import request from "request";

// const  access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTMyMzA2OTMsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiYTBiOGZmOGQtYjhkNy00MzQ0LTkyYTQtODZmMDAyMDRmNmNjIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwRVRNQzQxMjAwOCJ9.TFgUxBujdXLpiTp5PlojcmHCtexcDd1CVaLt8Pr2D3A"

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
