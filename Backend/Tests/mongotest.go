import (
    "context"
    "time"

    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
    "go.mongodb.org/mongo-driver/mongo/readpref"
)

ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
defer cancel()
client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:27017"))

defer func() {
    if err = client.Disconnect(ctx); err != nil {
        panic(err)
    }
}()

ctx, cancel = context.WithTimeout(context.Background(), 2*time.Second)
defer cancel()
err = client.Ping(ctx, readpref.Primary())

collection := client.Database("testing").Collection("numbers")

ctx, cancel = context.WithTimeout(context.Background(), 30*time.Second)
defer cancel()
cur, err := collection.Find(ctx, bson.D{})
if err != nil { log.Fatal(err) }
defer cur.Close(ctx)
for cur.Next(ctx) {
    var result bson.D
    err := cur.Decode(&result)
    if err != nil { log.Fatal(err) }
    // do something with result....
}
if err := cur.Err(); err != nil {
    log.Fatal(err)
}

var result struct {
    Value float64
}
filter := bson.D{{"name", "pi"}}
ctx, cancel = context.WithTimeout(context.Background(), 5*time.Second)
defer cancel()
err = collection.FindOne(ctx, filter).Decode(&result)
if err == mongo.ErrNoDocuments {
    // Do something when no record was found
    fmt.Println("record does not exist")
} else if err != nil {
    log.Fatal(err)
}
// Do something with result...


