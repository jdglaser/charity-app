import faunadb, {query as q} from "faunadb";
import { Handler } from "@netlify/functions";

exports.handler = async function(event, context) {
    const secret = process.env["FAUNA_DB_SECRET"];
    const data = JSON.parse(event.body);
    console.log("DATA", data);

    const client = new faunadb.Client({
        secret: secret,
        domain: 'db.us.fauna.com'
    })

    const res = client.query(
        q.Create(
            q.Collection("donations"),
            {data}
        )
    )
    .then((ret) => ret)
    .catch((err) => {throw err});

    return {
        statusCode: 200,
        body: JSON.stringify(res)
    };
}