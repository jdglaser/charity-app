import faunadb, {query as q} from "faunadb";

exports.handler = async function(event, context) {
    const secret = process.env["FAUNA_DB_SECRET"];
    const data = JSON.parse(event.body);

    const client = new faunadb.Client({
        secret: secret,
        domain: 'db.us.fauna.com'
    })

    return client.query(
        q.Create(
            q.Collection("donations"),
            {data}
        )
    )
    .then((response) => {
        console.log("success")
        return {
            statusCode: 200,
            body: JSON.stringify(response)
          }
    })
    .catch((error) => {
        console.log("error")
        return {
            statusCode: 400,
            body: JSON.stringify(error)
          }
    });
}